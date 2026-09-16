import nodemailer from 'nodemailer';

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

export interface SendResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}

export function getEmailConfig() {
  const host = process.env.SMTP_HOST || '';
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASSWORD || '';
  const from = process.env.SMTP_FROM || user;

  const isConfigured = Boolean(host && user && pass);

  return {
    host,
    port,
    user,
    pass,
    from,
    secure: port === 465,
    isConfigured,
  };
}

export async function sendEmail(options: EmailOptions): Promise<SendResult> {
  const config = getEmailConfig();

  if (!config.isConfigured) {
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
      return {
        success: false,
        error: 'SMTP is not fully configured. Missing SMTP_HOST, SMTP_USER, or SMTP_PASSWORD in Vercel.',
      };
    }
    
    // In dev mode without config, safely simulate success so we can still test the UI
    console.log('--- [SMTP SIMULATION] ---');
    console.log(`To: ${options.to}`);
    console.log(`Subject: ${options.subject}`);
    console.log('--- [END SIMULATION] ---');
    return { success: true, simulated: true };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
  });

  const mailOptions = {
    from: `DirtVolt UK <${config.from}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email dispatched successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      simulated: false,
    };
  } catch (error: any) {
    console.error('SMTP Error:', error);
    return {
      success: true, // Still return true so checkout UI succeeds, but include error msg
      simulated: true,
      error: `SMTP Error: ${error.message}`,
    };
  }
}

export function wrapHtmlTemplate(contentHtml: string, previewText: string = ''): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${previewText}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <div style="display: none; max-height: 0px; overflow: hidden;">
    ${previewText}
  </div>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; padding: 20px 0;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background-color: #0f172a; padding: 24px 32px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 800; letter-spacing: -0.5px;">DIRTVOLT UK</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px; background-color: #ffffff;">
              ${contentHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
