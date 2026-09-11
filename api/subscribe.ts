import type { IncomingMessage, ServerResponse } from 'http';
import { sendZohoMail, wrapHtmlTemplate, getZohoConfig } from './lib/zohoEmail';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

interface ExtendedResponse extends ServerResponse {
  status?: (statusCode: number) => ExtendedResponse;
  json?: (data: any) => void;
}

export default async function handler(req: ExtendedRequest, res: ExtendedResponse) {
  const setStatus = (code: number) => {
    if (res.status) res.status(code);
    else res.statusCode = code;
    return res;
  };

  const sendJson = (data: any) => {
    if (res.json) res.json(data);
    else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  };

  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    setStatus(200);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    setStatus(405);
    sendJson({ error: 'Method Not Allowed. Only POST is accepted.' });
    return;
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        setStatus(400);
        sendJson({ error: 'Invalid JSON body.' });
        return;
      }
    } else if (!body) {
      body = await new Promise((resolve) => {
        let data = '';
        req.on('data', (chunk) => { data += chunk; });
        req.on('end', () => {
          try { resolve(JSON.parse(data || '{}')); }
          catch { resolve({}); }
        });
      });
    }

    const { email = '', source = 'UK E-Bike Handbook & Trail Dispatch' } = body || {};

    if (!email || !email.includes('@')) {
      setStatus(400);
      sendJson({ error: 'A valid email address is required.' });
      return;
    }

    const config = getZohoConfig();
    const timestamp = new Date().toUTCString();

    // 1. Notification to Sales Inbox
    const result = await sendZohoMail({
      to: config.salesEmail,
      replyTo: email,
      subject: `[New Newsletter Subscriber] ${email} - ${source}`,
      text: `New subscriber registered on ebikessales.online:\n\nEmail: ${email}\nSource: ${source}\nDate: ${timestamp}`,
      html: wrapHtmlTemplate(`
        <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">
          New Newsletter &amp; Handbook Subscriber
        </h2>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 16px;">
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 4px 0; width: 100px;">Subscriber:</td>
            <td style="font-size: 13px; font-weight: 700; color: #2563eb;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 4px 0;">Source:</td>
            <td style="font-size: 13px; font-weight: 600; color: #0f172a;">${source}</td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 4px 0;">Date:</td>
            <td style="font-size: 13px; color: #64748b;">${timestamp}</td>
          </tr>
        </table>
      `, `New subscriber: ${email}`),
    });

    if (!result.success) {
      setStatus(500);
      sendJson({ error: result.error || 'Failed to dispatch subscription via Zoho Mail.' });
      return;
    }

    // 2. Deliver Handbook & Welcome Message to Subscriber
    if (config.isConfigured) {
      try {
        await sendZohoMail({
          to: email,
          subject: 'Your 2026 UK E-Bike Tax & Buying Handbook Download - DirtVolt',
          text: `Welcome to DirtVolt UK!\n\nThank you for requesting our 42-page UK E-Bike Tax & Buying Handbook.\n\nKey Highlights Inside:\n- Complete HMRC Salary Sacrifice 2026 guidelines (Cyclescheme, GCI, Vivup)\n- EAPC 250W vs Off-road electric dirt bike legal boundaries\n- British climate weatherproofing & Cytech winter battery checklists\n\nIf you have any questions regarding electric dirt bikes, utility quads, or 0% finance options, simply reply to this email or call 0800 892 4410.\n\nDirtVolt UK Customer Team\nsales@ebikessales.online`,
          html: wrapHtmlTemplate(`
            <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">
              Welcome to DirtVolt UK
            </h2>
            <p style="font-size: 14px; line-height: 22px; color: #475569; margin: 0 0 16px 0;">
              Thank you for subscribing to the <strong>DirtVolt UK Trail Dispatch</strong>. Your official 2026 UK E-Bike Tax &amp; Buying Handbook is ready for review.
            </p>

            <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 18px; margin: 20px 0;">
              <h3 style="font-size: 14px; font-weight: 700; color: #1e40af; margin: 0 0 8px 0;">
                📘 Included in Your 2026 Handbook:
              </h3>
              <ul style="margin: 0; padding-left: 20px; font-size: 13px; line-height: 20px; color: #1e3a8a;">
                <li>HMRC salary sacrifice rules &amp; how to save up to 47% via Cycle to Work</li>
                <li>EAPC 250W vs Off-Road Dirt Bike statutory boundaries</li>
                <li>British weatherproofing (IP67) &amp; Cytech winter battery maintenance</li>
                <li>Official UK spare parts sourcing &amp; 2-year warranty protections</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 24px 0;">
              <a href="https://ebikessales.online/blog" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 700; display: inline-block;">
                Read Our Latest Guides on ebikessales.online &rarr;
              </a>
            </div>

            <p style="font-size: 12px; color: #64748b; margin: 20px 0 0 0; text-align: center;">
              DirtVolt UK • 142-144 Old Street, Shoreditch, London • Freephone: 0800 892 4410
            </p>
          `, 'Your UK E-Bike Handbook is enclosed.'),
        });
      } catch (custErr) {
        console.warn('Subscriber email delivery error (non-fatal):', custErr);
      }
    }

    setStatus(200);
    sendJson({
      success: true,
      message: 'Subscription confirmed and handbook dispatched via Zoho Mail.',
    });
  } catch (error: any) {
    console.error('Subscribe handler error:', error);
    setStatus(500);
    sendJson({ error: error?.message || 'Internal Server Error' });
  }
}
