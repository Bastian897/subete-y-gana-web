import { getSupabaseAdmin } from '../../lib/supabaseAdmin.js';
import { requireAdmin } from '../../lib/adminAuth.js';

function csvEscape(value) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const user = await requireAdmin(req, res);
  if (!user) return;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('raffle_numbers')
    .select('number, sold_at, orders(email, payment_method, amount_clp)')
    .eq('status', 'sold')
    .order('number', { ascending: true });

  if (error) {
    console.error(error);
    res.status(500).json({ error: 'internal_error' });
    return;
  }

  const rows = [['numero', 'email', 'metodo_pago', 'monto_clp', 'fecha']];
  for (const r of data) {
    rows.push([r.number, r.orders?.email, r.orders?.payment_method, r.orders?.amount_clp, r.sold_at]);
  }
  const csv = rows.map((row) => row.map(csvEscape).join(',')).join('\n');

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="numeros-vendidos.csv"');
  res.status(200).send(csv);
}
