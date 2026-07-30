// Borra TODAS las órdenes y vuelve a poner los 25.000 números en 'available'.
// Úsalo una sola vez, antes de salir a producción real con clientes pagando de
// verdad, para limpiar las asignaciones hechas durante pruebas con el pago mock.
//   npx dotenv -e .env.local -- node scripts/reset-numbers.mjs
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error('Falta SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY en el entorno.');
  console.error('Corre con: npx dotenv -e .env.local -- node scripts/reset-numbers.mjs');
  process.exit(1);
}

const supabase = createClient(url, key);

async function main() {
  console.log('Reseteando: todos los números vuelven a "available" y se borran todas las órdenes...');

  const { error: e1 } = await supabase
    .from('raffle_numbers')
    .update({ status: 'available', order_id: null, sold_at: null })
    .eq('status', 'sold');
  if (e1) throw e1;

  const { error: e2 } = await supabase
    .from('orders')
    .delete()
    .not('id', 'is', null);
  if (e2) throw e2;

  console.log('Reset completo: 25.000 números disponibles, 0 órdenes.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
