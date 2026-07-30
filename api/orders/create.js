import { getSupabaseAdmin } from '../../lib/supabaseAdmin.js';
import { sendTicketEmail } from '../../lib/resend.js';

const UNIT_PRICE = 3000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  const { email, qty, paymentMethod } = body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ error: 'invalid_email' });
    return;
  }
  const qtyNum = Number(qty);
  if (!Number.isInteger(qtyNum) || qtyNum < 1 || qtyNum > 500) {
    res.status(400).json({ error: 'invalid_qty' });
    return;
  }

  const supabase = getSupabaseAdmin();
  const amountClp = qtyNum * UNIT_PRICE;

  const { data, error } = await supabase.rpc('create_order_and_assign', {
    p_email: email,
    p_qty: qtyNum,
    p_amount: amountClp,
    p_payment_method: paymentMethod || 'mock',
  });

  if (error) {
    if (error.message?.includes('insufficient_stock')) {
      const { count: remaining } = await supabase
        .from('raffle_numbers')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'available');
      res.status(409).json({ error: 'insufficient_stock', remaining: remaining ?? 0 });
      return;
    }
    console.error(error);
    res.status(500).json({ error: 'internal_error' });
    return;
  }

  const orderId = data?.[0]?.order_id;
  const numbers = (data || []).map((r) => r.assigned_number);

  try {
    await sendTicketEmail({ to: email, numbers, qty: qtyNum, amountClp, orderId });
  } catch (e) {
    // La venta ya es real (números asignados) aunque el correo falle — se loguea,
    // no se revierte la orden.
    console.error('email_failed', e);
  }

  res.status(200).json({ orderId, numbers });
}
