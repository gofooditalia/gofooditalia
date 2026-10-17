// Modulo "Richiedi informazioni" di gofood.it: invia la richiesta a info@gofood.it tramite Resend.
// Variabili su Vercel: RESEND_API_KEY (obbligatoria), CONTACT_FROM e CONTACT_TO (facoltative).

const FROM = process.env.CONTACT_FROM || 'GO! Food Italia <noreply@gofood.it>';
const TO = process.env.CONTACT_TO || 'info@gofood.it';

function clean(value, max) {
  return String(value || '').trim().slice(0, max);
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

  // Campo nascosto: se è compilato è un bot, rispondiamo "ok" senza inviare nulla
  if (body.website) return res.status(200).json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    interest: clean(body.interest, 80),
    message: clean(body.message, 5000),
  };

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !body.privacy) {
    return res.status(400).json({ error: 'Dati mancanti o non validi' });
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY non impostata');
    return res.status(500).json({ error: 'Servizio non configurato' });
  }

  const rows = [
    ['Nome', data.name],
    ['Attività', data.business],
    ['Email', data.email],
    ['Telefono', data.phone],
    ['Interesse', data.interest],
  ].filter(([, v]) => v);

  const html =
    '<h2>Nuova richiesta da gofood.it</h2><table cellpadding="4">' +
    rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join('') +
    `</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\n${data.message}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: `Richiesta informazioni: ${data.interest || 'gofood.it'} – ${data.name}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error('[contact] Invio Resend non riuscito:', response.status, await response.text());
    return res.status(502).json({ error: 'Invio non riuscito' });
  }
  return res.status(200).json({ ok: true });
};
