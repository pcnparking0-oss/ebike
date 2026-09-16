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
      try { body = JSON.parse(body); } catch {
        setStatus(400);
        sendJson({ error: 'Invalid JSON body.' });
        return;
      }
    } else if (!body) {
      body = await new Promise((resolve) => {
        let data = '';
        req.on('data', (chunk) => { data += chunk; });
        req.on('end', () => {
          try { resolve(JSON.parse(data || '{}')); } catch { resolve({}); }
        });
      });
    }

    const {
      fullName = 'UK Commuter',
      email = '',
      phone = '',
      employerName = 'Employer',
      schemeName = 'Cyclescheme (Blackhawk Network)',
      totalPrice = 0,
      bikePrice = 0,
      accessoriesPrice = 0,
      taxBand = 'Higher Rate (40%)',
      monthlyNetCost = 0,
      totalSaved = 0,
      termMonths = 12,
    } = body || {};

    if (!email) {
      setStatus(400);
      sendJson({ error: 'Customer email is required for the Cycle to Work quote.' });
      return;
    }

    const config = getEmailConfig();
    const timestamp = new Date().toUTCString();
    const quoteRef = `C2W-UK-${Math.floor(10000 + Math.random() * 90000)}`;

    // 1. Email notification to Sales
    const result = await sendEmail({
      to: config.from,
      replyTo: email,
      subject: `[Cycle to Work Quote #${quoteRef}] £${totalPrice.toLocaleString()} - ${fullName} (${employerName})`,
      text: `Cycle to Work Quote Request #${quoteRef}\nCustomer: ${fullName} (${email})\nEmployer: ${employerName}\nScheme: ${schemeName}\nTotal Package: £${totalPrice}\nNet Monthly Cost: £${monthlyNetCost}/mo\nTotal Savings: £${totalSaved}`,
      html: wrapHtmlTemplate(`
        <div style="margin-bottom: 20px;">
          <span style="background-color: #dcfce7; color: #15803d; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-family: monospace;">
            QUOTE REF: #${quoteRef}
          </span>
          <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 8px 0 4px 0;">
            Cycle to Work Employer Quotation Request
          </h2>
          <p style="font-size: 13px; color: #64748b; margin: 0;">
            Generated on ${timestamp} for employer salary sacrifice submission
          </p>
        </div>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 3px 0; width: 140px;">Employee Name:</td>
            <td style="font-size: 13px; font-weight: 700; color: #0f172a;">${fullName}</td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Employee Email:</td>
            <td style="font-size: 13px; font-weight: 700; color: #2563eb;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Phone:</td>
            <td style="font-size: 13px; font-weight: 600; color: #0f172a;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Employer / Org:</td>
            <td style="font-size: 13px; font-weight: 700; color: #0f172a;">${employerName}</td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Scheme Provider:</td>
            <td style="font-size: 13px; font-weight: 600; color: #0f172a;">${schemeName}</td>
          </tr>
        </table>

        <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size: 13px; color: #1e3a8a; padding: 2px 0;">Package Retail Total:</td>
              <td align="right" style="font-size: 13px; font-weight: 700; color: #1e3a8a;">£${totalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="font-size: 13px; color: #1e3a8a; padding: 2px 0;">Tax Bracket:</td>
              <td align="right" style="font-size: 13px; font-weight: 600; color: #1e3a8a;">${taxBand}</td>
            </tr>
            <tr>
              <td style="font-size: 13px; color: #15803d; padding: 2px 0; font-weight: 700;">HMRC Tax &amp; NI Saved:</td>
              <td align="right" style="font-size: 13px; font-weight: 700; color: #15803d;">£${totalSaved.toLocaleString()}</td>
            </tr>
            <tr style="border-top: 1px solid #93c5fd;">
              <td style="font-size: 14px; font-weight: 800; color: #1e40af; padding: 6px 0 0 0;">Employee Net Cost:</td>
              <td align="right" style="font-size: 16px; font-weight: 900; color: #1e40af; padding: 6px 0 0 0;">£${monthlyNetCost.toFixed(2)}/mo (${termMonths} mos)</td>
            </tr>
          </table>
        </div>
      `, `Cycle to Work Quote #${quoteRef} for ${fullName}`),
    });

    if (!result.success) {
      setStatus(500);
      sendJson({ error: result.error || 'Failed to dispatch quote via Zoho Mail.' });
      return;
    }

    // 2. Email Quote to Customer
    if (config.isConfigured) {
      try {
        await sendEmail({
          to: email,
          subject: `Your Official Cycle to Work Quote #${quoteRef} - DirtVolt UK`,
          text: `Dear ${fullName},\n\nThank you for requesting an official Cycle to Work quote with DirtVolt UK.\n\nQuote Reference: #${quoteRef}\nPackage Value: £${totalPrice.toLocaleString()}\nEmployer: ${employerName}\nScheme Provider: ${schemeName}\nYour Estimated Net Monthly Deduction: £${monthlyNetCost.toFixed(2)}/month (${termMonths} months)\nTotal Tax & NI Saved: £${totalSaved.toLocaleString()}\n\nNext Steps:\n1. Submit this quote reference to your employer's HR or benefits portal (Cyclescheme, Green Commute Initiative, Vivup, Halfords Cycle2Work).\n2. Once approved, your employer will issue your digital redemption certificate.\n3. Forward your voucher code to sales@ebikessale.online or call 0800 892 4410 and we will release your bike for immediate tracked UK delivery.\n\nDirtVolt UK Customer Operations\nsales@ebikessale.online`,
          html: wrapHtmlTemplate(`
            <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0;">
              Your Official Cycle to Work Employer Quote
            </h2>
            <p style="font-size: 14px; line-height: 22px; color: #475569; margin: 0 0 16px 0;">
              Dear <strong>${fullName}</strong>, your HMRC-compliant quotation has been registered under reference <strong style="color: #2563eb; font-family: monospace;">#${quoteRef}</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 13px; color: #64748b; padding: 4px 0;">Quote Reference:</td>
                  <td style="font-size: 13px; font-weight: 700; color: #0f172a; font-family: monospace;">#${quoteRef}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; padding: 4px 0;">Selected Scheme:</td>
                  <td style="font-size: 13px; font-weight: 600; color: #0f172a;">${schemeName}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; padding: 4px 0;">Package Retail Value:</td>
                  <td style="font-size: 13px; font-weight: 700; color: #0f172a;">£${totalPrice.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #15803d; padding: 4px 0; font-weight: 600;">Estimated Tax Saved:</td>
                  <td style="font-size: 13px; font-weight: 700; color: #15803d;">£${totalSaved.toLocaleString()}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                  <td style="font-size: 14px; font-weight: 800; color: #0f172a; padding: 6px 0 0 0;">Estimated Net Cost:</td>
                  <td style="font-size: 16px; font-weight: 800; color: #2563eb; padding: 6px 0 0 0;">£${monthlyNetCost.toFixed(2)}/mo</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
              <h4 style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #1e40af;">How to Finalise Your Voucher:</h4>
              <ol style="margin: 0; padding-left: 18px; font-size: 12px; line-height: 18px; color: #1e3a8a;">
                <li>Provide Quote <strong>#${quoteRef}</strong> to your HR / Payroll department.</li>
                <li>When your employer issues the digital voucher, email it to <strong>sales@ebikessale.online</strong>.</li>
                <li>We immediately dispatch your electric machine via tracked 24-48h courier.</li>
              </ol>
            </div>
          `, `Your Cycle to Work Quote #${quoteRef} is ready.`),
        });
      } catch (custErr) {
        console.warn('Customer quote delivery error (non-fatal):', custErr);
      }
    }

    setStatus(200);
    sendJson({
      success: true,
      quoteRef,
      message: 'Cycle to Work official quote sent via Zoho Mail.',
    });
  } catch (error: any) {
    console.error('Quote handler error:', error);
    setStatus(500);
    sendJson({ error: error?.message || 'Internal Server Error' });
  }
}
