import { getSupabaseAdmin } from './supabaseAdmin.js';

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

// Valida el JWT de Supabase Auth que manda el panel de admin (Authorization:
// Bearer <access_token>) y chequea el email contra la lista blanca ADMIN_EMAILS.
// Devuelve el user si es admin, o null (y ya respondió el error) si no.
export async function requireAdmin(req, res) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) {
    res.status(401).json({ error: 'missing_token' });
    return null;
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user?.email) {
    res.status(401).json({ error: 'invalid_token' });
    return null;
  }

  const email = data.user.email.toLowerCase();
  if (!ADMIN_EMAILS.includes(email)) {
    res.status(403).json({ error: 'not_admin' });
    return null;
  }

  return data.user;
}
