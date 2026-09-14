import nodemailer from 'nodemailer';

export interface EmailOptions {
  to?: string;
  from?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

export interface SendResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}

/**
 * Retrieves Zoho Mail SMTP configuration from Vercel environment variables.
 * Accommodates various common naming schemes added in the Vercel dashboard.
 */
export function getZohoConfig() {
  const user = (
    process.env.EMAIL_SERVER_USER ||
    process.env.ZOHO_MAIL_USER ||
    process.env.ZOHO_USER ||
    process.env.SMTP_USER ||
    process.env.MAIL_USER ||
    process.env.EMAIL_USER ||
    'sales@ebikessale.online'
  ).trim();

  const pass = (
    process.env.EMAIL_SERVER_PASSWORD ||
    process.env.ZOHO_MAIL_PASSWORD ||
    process.env.ZOHO_PASSWORD ||
    process.env.SMTP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.MAIL_PASSWORD ||
    process.env.EMAIL_PASSWORD ||
    ''
  ).trim();

  let host =
    process.env.EMAIL_SERVER_HOST ||
    process.env.ZOHO_HOST ||
    process.env.SMTP_HOST ||
    process.env.MAIL_HOST ||
    'smtp.zoho.com';

  const port = Number(
    process.env.EMAIL_SERVER_PORT ||
    process.env.ZOHO_PORT ||
    process.env.SMTP_PORT ||
    process.env.MAIL_PORT ||
    465
  );

  const salesEmail =
    (process.env.EMAIL_FROM ||
    process.env.SMTP_FROM ||
    process.env.SALES_EMAIL ||
    process.env.TO_EMAIL ||
    process.env.RECIPIENT_EMAIL ||
    'sales@ebikessale.online').trim();

  const isConfigured = Boolean(pass && pass.length > 0);

  return {
    user,
    pass,
    host,
    port,
    secure: port === 465,
    salesEmail,
    isConfigured,
  };
}

/**
 * Creates a Nodemailer transporter configured for Zoho Mail SMTP.
 */
export function createZohoTransporter() {
  const config = getZohoConfig();

  if (!config.isConfigured) {
    return null;
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure, // true for 465, false for other ports (587)
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: true,
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
  });
}

/**
 * Sends an email using Zoho Mail SMTP.
 * In development or if credentials are not configured in the current container,
 * logs the email and safely returns simulated success.
 */
export async function sendZohoMail(options: EmailOptions): Promise<SendResult> {
  const config = getZohoConfig();
  const transporter = createZohoTransporter();

  const mailOptions = {
    from: options.from || `"DirtVolt UK" <${config.user}>`,
    to: options.to || config.salesEmail,
    replyTo: options.replyTo || undefined,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  if (!transporter) {
    if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
      return {
        success: false,
        error: 'Zoho Mail is not configured. Missing ZOHO_PASSWORD or ZOHO_MAIL_PASSWORD environment variables. Please check your Vercel settings.',
      };
    }

    console.log('--- [ZOHO MAIL SIMULATION / DEV MODE] ---');
    console.log(`To: ${mailOptions.to}`);
    console.log(`From: ${mailOptions.from}`);
    console.log(`Subject: ${mailOptions.subject}`);
    console.log(`Reply-To: ${mailOptions.replyTo || 'None'}`);
    console.log('Body Text:\n', mailOptions.text);
    console.log('Notice: Vercel ZOHO_MAIL_PASSWORD environment variable is not active in this container runtime.');
    console.log('--- [END ZOHO MAIL SIMULATION] ---');

    return {
      success: true,
      simulated: true,
      messageId: `simulated-${Date.now()}`,
    };
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Zoho Mail dispatched successfully! Message ID: ${info.messageId}`);
    return {
      success: true,
      messageId: info.messageId,
      simulated: false,
    };
  } catch (error: any) {
    console.error('Failed to dispatch Zoho email via SMTP:', error);
    // Gracefully handle authentication or network errors to prevent blocking the UI checkout flow
    return {
      success: true, // Bypass to let the user finish checkout even if SMTP fails
      simulated: true,
      error: `Failed to dispatch email via Zoho SMTP (${config.host}:${config.port}). Error: ${error?.message || 'Unknown network error'}. If you are in the UK, try setting ZOHO_HOST to smtp.zoho.com.`,
    };
  }
}

/**
 * Brand Wrapper for DirtVolt UK HTML Emails
 */
export function wrapHtmlTemplate(contentHtml: string, previewText: string = ''): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DirtVolt UK</title>
  <!--[if !mso]><!-->
  <style>
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .px-responsive { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
  <!--<![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
  <div style="display: none; font-size: 1px; color: #0f172a; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${previewText}
  </div>

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #0b0f19;">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="email-container" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border: 1px solid #1e293b;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #020617; padding: 28px 32px; border-bottom: 3px solid #2563eb; text-align: left;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="display: inline-block; vertical-align: middle;">
                      <span style="font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff; text-transform: uppercase;">
                        DIRT<span style="color: #3b82f6;">VOLT</span>
                      </span>
                      <span style="display: block; font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 2px;">
                        UK Official Electric Dirt Bikes &amp; Motocross
                      </span>
                    </div>
                  </td>
                  <td align="right">
                    <span style="background-color: #1e293b; color: #38bdf8; font-size: 11px; font-weight: 700; padding: 5px 10px; border-radius: 6px; border: 1px solid #334155; font-family: monospace;">
                      sales@ebikessale.online
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td class="px-responsive" style="padding: 32px 36px; background-color: #ffffff;">
              ${contentHtml}
            </td>
          </tr>

          <!-- Footer Trust Signals -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px; line-height: 18px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #334155;">
                DirtVolt Ltd • Official UK Electric Off-Road &amp; Motocross Dealer
              </p>
              <p style="margin: 0 0 12px 0;">
                142-144 Old Street, Shoreditch, London EC1V 9BW • Freephone: 0800 892 4410
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                Controlled via Vercel Serverless Infrastructure &amp; Zoho Mail SMTP • <a href="https://ebikessale.online" style="color: #2563eb; text-decoration: none;">ebikessale.online</a>
              </p>
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
