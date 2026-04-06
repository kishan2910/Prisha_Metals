import nodemailer from 'nodemailer';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO = 'sales@prishametalint.com',
} = process.env;

function sendError(res: any, message: string, status = 400) {
  res.status(status).json({ error: message });
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendError(res, 'Method not allowed', 405);
  }

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return sendError(
      res,
      'Email transport is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.',
      500,
    );
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return sendError(res, 'Name, email, and message are required fields.', 400);
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailText = `Website inquiry from ${name}\n\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`;
  const mailHtml = `
    <p><strong>Website inquiry from:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Website inquiry" <${SMTP_USER}>`,
      to: MAIL_TO,
      subject: `Website inquiry from ${name}`,
      text: mailText,
      html: mailHtml,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Email send failed:', error);
    sendError(res, 'Unable to send inquiry. Please try again later.', 500);
  }
}
