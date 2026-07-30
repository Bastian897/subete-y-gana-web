-- Súbete y Gana — esquema de base de datos
-- Correr una sola vez en el SQL editor de Supabase (proyecto subete-y-gana-db).

create extension if not exists pgcrypto;

create table if not exists orders (
  id             uuid primary key default gen_random_uuid(),
  email          text not null,
  qty            int not null,
  amount_clp     int not null,
  payment_method text not null,
  created_at     timestamptz not null default now()
);

create table if not exists raffle_numbers (
  id        bigserial primary key,
  number    text unique not null,               -- '00001'..'25000'
  status    text not null default 'available' check (status in ('available', 'sold')),
  order_id  uuid references orders(id),
  sold_at   timestamptz
);

create index if not exists raffle_numbers_status_idx   on raffle_numbers (status);
create index if not exists raffle_numbers_order_id_idx on raffle_numbers (order_id);
create index if not exists orders_email_idx            on orders (email);

-- RLS habilitado sin políticas: el anon key (embebido en admin/index.html para el
-- login) NO puede leer ni escribir estas tablas directamente vía la API REST
-- autogenerada de Supabase. Todo el acceso real pasa por /api/* usando la
-- service_role key, que ignora RLS.
alter table orders          enable row level security;
alter table raffle_numbers  enable row level security;

-- Asigna `p_qty` números disponibles a una orden nueva de forma atómica.
-- FOR UPDATE SKIP LOCKED evita que dos compras concurrentes reciban el mismo
-- número; si no queda stock suficiente, se aborta TODA la función (incluyendo
-- el insert en `orders`) — no quedan órdenes fantasma ni números a medio asignar.
create or replace function create_order_and_assign(
  p_email text,
  p_qty int,
  p_amount int,
  p_payment_method text
) returns table(order_id uuid, assigned_number text)
language plpgsql
as $$
declare
  v_order_id uuid;
  v_numbers  text[];
begin
  if p_qty < 1 or p_qty > 500 then
    raise exception 'invalid_qty';
  end if;

  insert into orders (email, qty, amount_clp, payment_method)
  values (p_email, p_qty, p_amount, p_payment_method)
  returning id into v_order_id;

  with claimed as (
    update raffle_numbers
    set status = 'sold', order_id = v_order_id, sold_at = now()
    where id in (
      select id from raffle_numbers
      where status = 'available'
      order by id
      for update skip locked
      limit p_qty
    )
    returning number
  )
  select array_agg(number) into v_numbers from claimed;

  if v_numbers is null or array_length(v_numbers, 1) < p_qty then
    raise exception 'insufficient_stock';
  end if;

  return query select v_order_id, unnest(v_numbers);
end;
$$;
