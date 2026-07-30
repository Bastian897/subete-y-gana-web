// Puebla raffle_numbers con los 25.000 números secuenciales '00001'..'25000'.
// Correr una sola vez, después de aplicar sql/schema.sql:
//   npx dotenv -e .env.local -- node scripts/seed-numbers.mjs
import { createClient } from '@supabase/supabase-js';

const TOTAL = 25000;
const BATCH = 1000;

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error('Falta SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY en el entorno.');
  console.error('Corre con: npx dotenv -e .env.local -- node scripts/seed-numbers.mjs');
  process.exit(1);
}

const supabase = createClient(url, key);

async function main() {
  const { count, error: countErr } = await supabase
    .from('raffle_numbers')
    .select('*', { count: 'exact', head: true });
  if (countErr) throw countErr;
  if (count >= TOTAL) {
    console.error(`raffle_numbers ya tiene ${count} filas (>= ${TOTAL}). Usa scripts/reset-numbers.mjs si quieres reiniciar antes de re-sembrar.`);
    process.exit(1);
  }
  const resumeFrom = count + 1;
  if (count > 0) console.log(`Reanudando desde el número ${String(resumeFrom).padStart(5, '0')} (ya hay ${count} filas).`);

  for (let start = resumeFrom; start <= TOTAL; start += BATCH) {
    const end = Math.min(start + BATCH - 1, TOTAL);
    const rows = [];
    for (let n = start; n <= end; n++) rows.push({ number: String(n).padStart(5, '0') });

    const { error } = await supabase.from('raffle_numbers').insert(rows);
    if (error) throw error;
    console.log(`Insertados ${end} / ${TOTAL}`);
  }

  console.log('Listo: 25.000 números sembrados con status=available.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
