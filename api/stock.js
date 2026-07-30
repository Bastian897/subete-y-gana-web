import { getSupabaseAdmin } from '../lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const supabase = getSupabaseAdmin();

  const [{ count: total, error: e1 }, { count: sold, error: e2 }] = await Promise.all([
    supabase.from('raffle_numbers').select('*', { count: 'exact', head: true }),
    supabase.from('raffle_numbers').select('*', { count: 'exact', head: true }).eq('status', 'sold'),
  ]);

  if (e1 || e2) {
    console.error(e1 || e2);
    res.status(500).json({ error: 'internal_error' });
    return;
  }

  const totalNum = total ?? 0;
  const soldNum = sold ?? 0;
  res.status(200).json({ total: totalNum, sold: soldNum, remaining: totalNum - soldNum });
}
