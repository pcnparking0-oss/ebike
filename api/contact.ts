import type { IncomingMessage, ServerResponse } from 'http';
import { sendZohoMail, wrapHtmlTemplate, getZohoConfig } from './lib/zohoEmail';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
  query?: any;
}

interface ExtendedResponse extends ServerResponse {
  status?: (statusCode: number) => ExtendedResponse;
  json?: (data: any) => void;
}

export default async function handler(req: ExtendedRequest, res: ExtendedResponse) {
  // Setup helper methods if not provided by framework
  const setStatus = (code: number) => {
    if (res.status) {
      res.status(code);
    } else {
      res.statusCode = code;
    }
    return res;
  };

  const sendJson = (data: any) => {
    if (res.json) {
      res.json(data);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  };

  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

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
    // Parse body if not pre-parsed by Vercel
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        setStatus(400);
        sendJson({ error: 'Invalid JSON body provided.' });
        return;
      }
    } else if (!body) {
      body = await new Promise((resolve) => {
        let data = '';
        req.on('data', (chunk) => {
          data += chunk;
        });
        req.on('end', () => {
          try {
            resolve(JSON.parse(data || '{}'));
          } catch {
            resolve({});
          }
        });
      });
    }

    const {
      fullName = '',
      email = '',
      phone = '',
      subject = 'General Enquiry',
      city = 'UK',
      message = '',
    } = body || {};

    if (!email || !message) {
      setStatus(400);
      sendJson({ error: 'Email and message fields are required.' });
      return;
    }

    const config = getZohoConfig();
    const timestamp = new Date().toUTCString();
    const ticketId = `VT-UK-${Math.floor(1000 + Math.random() * 9000)}`;

    const textContent = `
NEW UK CUSTOMER ENQUIRY [${ticketId}]
----------------------------------------
Subject: ${subject}
Full Name: ${fullName || 'Not specified'}
Email: ${email}
Phone: ${phone || 'Not provided'}
City/Region: ${city || 'UK'}
Date: ${timestamp}

Customer Message:
${message}

----------------------------------------
DirtVolt UK • sales@ebikessale.online
    `.trim();

    const htmlContent = wrapHtmlTemplate(`
      <div style="margin-bottom: 24px;">
        <span style="background-color: #dbeafe; color: #1d4ed8; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-family: monospace; text-transform: uppercase;">
          Ticket: #${ticketId}
        </span>
        <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 8px 0 4px 0;">
          New Website Enquiry: ${subject}
        </h2>
        <p style="font-size: 13px; color: #64748b; margin: 0;">
          Received from ebikessale.online contact form on ${timestamp}
        </p>
      </div>

      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <tr>
          <td style="padding: 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding: 4px 0; font-size: 13px; color: #64748b; width: 120px;">Customer:</td>
                <td style="padding: 4px 0; font-size: 13px; font-weight: 700; color: #0f172a;">${fullName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-size: 13px; color: #64748b;">Email:</td>
                <td style="padding: 4px 0; font-size: 13px; font-weight: 700; color: #2563eb;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-size: 13px; color: #64748b;">Phone:</td>
                <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #0f172a;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-size: 13px; color: #64748b;">City / Region:</td>
                <td style="padding: 4px 0; font-size: 13px; font-weight: 600; color: #0f172a;">${city}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">
          Enquiry Message:
        </h3>
        <div style="background-color: #ffffff; border-left: 4px solid #2563eb; padding: 14px 16px; font-size: 14px; line-height: 22px; color: #334155; border-radius: 0 8px 8px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; border-left: 4px solid #2563eb;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
      </div>

      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${email}?subject=Re: [DirtVolt UK ${ticketId}] ${encodeURIComponent(subject)}" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 700; display: inline-block;">
          Reply to Customer Directly &rarr;
        </a>
      </div>
    `, `New enquiry from ${fullName || email}: ${subject}`);

    // Dispatch email to sales inbox with reply-to customer
    const result = await sendZohoMail({
      to: config.salesEmail,
      replyTo: email,
      subject: `[DirtVolt UK Enquiry #${ticketId}] ${subject} - ${fullName || city}`,
      text: textContent,
      html: htmlContent,
    });

    if (!result.success) {
      setStatus(500);
      sendJson({
        error: result.error || 'Failed to send enquiry via Zoho Mail.',
        ticketId,
      });
      return;
    }

    // Optional confirmation copy to customer
    if (config.isConfigured) {
      try {
        await sendZohoMail({
          to: email,
          subject: `Enquiry Received [#${ticketId}] - DirtVolt UK Specialist Team`,
          text: `Hi ${fullName || 'there'},\n\nThank you for reaching out to DirtVolt UK. We have received your enquiry regarding "${subject}" (Ticket #${ticketId}). Our UK customer team will review your message and reply shortly.\n\nDirtVolt UK Customer Support\nFreephone: 0800 892 4410\nsales@ebikessale.online`,
          html: wrapHtmlTemplate(`
            <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">
              Thank You for Contacting DirtVolt UK
            </h2>
            <p style="font-size: 14px; line-height: 22px; color: #475569; margin: 0 0 16px 0;">
              Hi <strong>${fullName || 'there'}</strong>, your enquiry has been assigned reference <strong style="color: #2563eb; font-family: monospace;">#${ticketId}</strong>.
            </p>
            <p style="font-size: 14px; line-height: 22px; color: #475569; margin: 0 0 20px 0;">
              Our specialist team is reviewing your message regarding <em>"${subject}"</em>. A certified UK advisor will respond directly to this email within 2 business hours.
            </p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 12px; color: #64748b;">
              <strong>Need urgent assistance?</strong> Call our UK hotline on <strong>0800 892 4410</strong> (Mon-Sat, 8:30am - 6:00pm).
            </div>
          `, `Your DirtVolt enquiry #${ticketId} has been received.`),
        });
      } catch (clientErr) {
        console.warn('Customer auto-responder error (non-fatal):', clientErr);
      }
    }

    setStatus(200);
    sendJson({
      success: true,
      ticketId,
      message: 'Enquiry sent successfully via Zoho Mail.',
      simulated: result.simulated || false,
    });
  } catch (error: any) {
    console.error('Contact handler uncaught exception:', error);
    setStatus(500);
    sendJson({ error: error?.message || 'Internal Server Error' });
  }
}
