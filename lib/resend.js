import { Resend } from 'resend';

let client;

function getResend() {
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

// Dominio verificado en Resend: subdominio mail.agenciacontai.cl (DNS gestionado
// vía Vercel, records DKIM/SPF/MX agregados para no tocar el SPF/DKIM de
// Hostinger que ya usa el dominio raíz agenciacontai.cl para correo real).
const FROM = 'Súbete y Gana <sorteo@mail.agenciacontai.cl>';

export async function sendTicketEmail({ to, numbers, qty, amountClp, orderId }) {
  const numbersList = numbers.map((n) => `#${n}`).join(', ');
  const plural = qty > 1;

  const html = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;">
  <div style="background:#0A0A0B;padding:40px 24px;font-family:Arial,Helvetica,sans-serif;color:#EDEDED;">
    <div style="max-width:480px;margin:0 auto;background:#141416;border-radius:16px;border:1px solid rgba(255,255,255,.08);overflow:hidden;">
      <div style="height:4px;background:linear-gradient(90deg,#D4AF37,#F5C842);"></div>
      <div style="padding:32px;">
        <h1 style="font-size:22px;margin:0 0 8px;color:#fff;">¡Ya estás participando!</h1>
        <p style="font-size:14px;color:#A8A8AC;line-height:1.6;margin:0 0 24px;">
          Tu compra fue confirmada. Guarda este correo — aquí está${plural ? 'n' : ''} tu${plural ? 's' : ''}
          número${plural ? 's' : ''} de participación para el sorteo del Chevrolet Silverado Z71.
        </p>
        <div style="background:#0A0A0B;border:1px solid rgba(212,175,55,.25);border-radius:12px;padding:20px;margin-bottom:20px;">
          <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#A8A8AC;margin-bottom:8px;">
            Tu${plural ? 's' : ''} número${plural ? 's' : ''} de participación
          </div>
          <div style="font-family:'Courier New',monospace;font-size:22px;font-weight:700;letter-spacing:.04em;color:#F5C842;">
            ${numbersList}
          </div>
        </div>
        <p style="font-size:12px;color:#6B6B70;margin:0;">
          ${qty} participaci${qty === 1 ? 'ón' : 'ones'} · $${amountClp.toLocaleString('es-CL')} CLP · Orden ${orderId}
        </p>
        <p style="font-size:12px;color:#6B6B70;margin-top:16px;">
          Sorteo ante notario · Transmisión en vivo. Guarda tu${plural ? 's' : ''} número${plural ? 's' : ''} — lo${plural ? 's' : ''} necesitarás el día del sorteo.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  const resend = getResend();
  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject: plural ? `Tus ${qty} números de participación` : 'Tu número de participación',
    html,
  });
  if (error) throw error;
}
