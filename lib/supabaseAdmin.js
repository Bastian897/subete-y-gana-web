import { createClient } from '@supabase/supabase-js';

let client;

// Init perezoso: evita que `next build` (o cualquier evaluación en build time)
// truene si las env vars todavía no están seteadas. Ver nota en la skill de
// vercel-storage: nunca envolver esto en un Proxy, rompe librerías que
// inspeccionan el objeto (ej. adapters de auth).
export function getSupabaseAdmin() {
  if (!client) {
    client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  }
  return client;
}
