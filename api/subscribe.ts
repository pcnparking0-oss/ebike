import type { IncomingMessage, ServerResponse } from 'http';
import { sendEmail, wrapHtmlTemplate, getEmailConfig } from './lib/email.js';

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

    const { email = '', source = 'Netherlands E-Mobility & Trail Dispatch' } = body || {};

    if (!email || !email.includes('@')) {
      setStatus(400);
      sendJson({ error: 'A valid email address is required.' });
      return;
    }

    const config = getEmailConfig();
    const timestamp = new Date().toUTCString();

    // 1. Notification to Sales Inbox
    const result = await sendEmail({
      to: config.from,
      replyTo: email,
      subject: `[New Newsletter Subscriber] ${email} - ${source}`,
      text: `New subscriber registered on ebikessale.online:\n\nEmail: ${email}\nSource: ${source}\nDate: ${timestamp}`,
      html: wrapHtmlTemplate(`
        <h2 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">
          New Newsletter &amp; Trail Dispatch Subscriber
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
        await sendEmail({
          to: email,
          subject: 'Your 2026 Netherlands E-Dirt Bike & Trail Guide - DirtVolt',
          text: `Welcome to DirtVolt Netherlands!\n\nThank you for requesting our 2026 Electric Dirt Bike & Dutch Trail Guide.\n\nKey Highlights Inside:\n- Dutch Road Traffic Rules (Wegenverkeerswet / RDW) & EU EN 15194 regulations\n- Off-road enduro tracks & forest trail networks across the Netherlands (Veluwe, Utrechtse Heuvelrug, Brabant)\n- Coastal weatherproofing & winter battery maintenance\n\nIf you have any questions regarding electric dirt bikes or stock availability in Amsterdam, simply reply to this email or call +31 20 808 4410.\n\nDirtVolt Netherlands Team\nsales@ebikessale.online\nKeizersgracht 482, 1017 EG Amsterdam`,
          html: wrapHtmlTemplate(`
            <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">
              Welcome to DirtVolt Netherlands
            </h2>
            <p style="font-size: 14px; line-height: 22px; color: #475569; margin: 0 0 16px 0;">
              Thank you for subscribing to the <strong>DirtVolt Netherlands Trail Dispatch</strong>. Your official 2026 Electric Dirt Bike &amp; Dutch E-Mobility Guide is ready.
            </p>

            <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 18px; margin: 20px 0;">
              <h3 style="font-size: 14px; font-weight: 700; color: #1e40af; margin: 0 0 8px 0;">
                📘 Included in Your 2026 Guide:
              </h3>
              <ul style="margin: 0; padding-left: 20px; font-size: 13px; line-height: 20px; color: #1e3a8a;">
                <li>Dutch Road Traffic Rules (RDW / Wegenverkeerswet) &amp; EU EN 15194 statutory guidelines</li>
                <li>Off-road enduro trails &amp; motocross tracks across Gelderland, Brabant, and Utrecht</li>
                <li>Coastal rain &amp; wind battery care &amp; IP67 waterproofing checklists</li>
                <li>Official manufacturer spare parts sourcing &amp; 2-year warranty protections in Amsterdam</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 24px 0;">
              <a href="https://ebikessale.online/blog" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 700; display: inline-block;">
                Read Our Latest Guides on ebikessale.online &rarr;
              </a>
            </div>

            <p style="font-size: 12px; color: #64748b; margin: 20px 0 0 0; text-align: center;">
              DirtVolt Netherlands • Keizersgracht 482, 1017 EG Amsterdam • Direct Hotline: +31 20 808 4410
            </p>
          `, 'Your Netherlands E-Dirt Bike Guide is enclosed.'),
        });
      } catch (custErr) {
        console.warn('Subscriber email delivery error (non-fatal):', custErr);
      }
    }

    setStatus(200);
    sendJson({
      success: true,
      message: 'Subscription confirmed and guide dispatched via Zoho Mail.',
    });
  } catch (error: any) {
    console.error('Subscribe handler error:', error);
    setStatus(500);
    sendJson({ error: error?.message || 'Internal Server Error' });
  }
}
