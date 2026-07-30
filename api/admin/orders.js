import { getSupabaseAdmin } from '../../lib/supabaseAdmin.js';
import { requireAdmin } from '../../lib/adminAuth.js';

const PAGE_SIZE = 50;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const user = await requireAdmin(req, res);
  if (!user) return;

  const supabase = getSupabaseAdmin();
  const q = String(req.query.q || '').trim();
  const page = Math.max(1, Number(req.query.page) || 1);
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query;
  if (q && /^\d+$/.test(q)) {
    const padded = q.padStart(5, '0');
    query = supabase
      .from('orders')
      .select('id, email, qty, amount_clp, payment_method, created_at, raffle_numbers!inner(number)', {
        count: 'exact',
      })
      .eq('raffle_numbers.number', padded);
  } else {
    query = supabase
      .from('orders')
      .select('id, email, qty, amount_clp, payment_method, created_at, raffle_numbers(number)', {
        count: 'exact',
      });
    if (q) query = query.ilike('email', `%${q}%`);
  }

  const { data, error, count } = await query.order('created_at', { ascending: false }).range(from, to);

  if (error) {
    console.error(error);
    res.status(500).json({ error: 'internal_error' });
    return;
  }

  res.status(200).json({ orders: data, total: count ?? 0, page, pageSize: PAGE_SIZE });
}
