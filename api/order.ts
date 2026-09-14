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
      orderReference = `VT-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName = 'Valued Customer',
      customerEmail = '',
      customerPhone = '',
      deliveryAddress = '',
      city = '',
      postcode = '',
      paymentMethod = 'bank_transfer',
      items = [],
      subtotal = 0,
      discount = 0,
      shipping = 0,
      total = 0,
      notes = '',
    } = body || {};

    if (!customerEmail) {
      setStatus(400);
      sendJson({ error: 'Customer email is required to process the order.' });
      return;
    }

    const config = getZohoConfig();
    const timestamp = new Date().toUTCString();

    const paymentMethodLabels: Record<string, string> = {
      bank_transfer: 'Direct Bank Transfer (BACS / Proforma)',
      c2w: 'Cycle to Work Scheme Voucher',
      novuna: 'Novuna 0% APR Finance',
      klarna: 'Klarna Pay in 3',
      card: 'Debit / Credit Card',
    };

    const paymentLabel = paymentMethodLabels[paymentMethod] || paymentMethod;

    // Build items HTML table rows
    const itemsHtml = items.map((item: any) => `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #0f172a;">
          ${item.name || item.product?.name || 'Electric Dirt Bike'}
        </td>
        <td align="center" style="padding: 10px 0; font-size: 13px; color: #64748b;">
          ${item.quantity || 1}
        </td>
        <td align="right" style="padding: 10px 0; font-size: 13px; font-weight: 700; color: #0f172a;">
          £${((item.priceGBP || item.product?.priceGBP || 0) * (item.quantity || 1)).toLocaleString()}
        </td>
      </tr>
    `).join('');

    // 1. Email to sales@ebikessale.online
    const salesNotificationHtml = wrapHtmlTemplate(`
      <div style="margin-bottom: 20px;">
        <span style="background-color: #dcfce7; color: #15803d; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-family: monospace; text-transform: uppercase;">
          Order #${orderReference}
        </span>
        <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 8px 0 4px 0;">
          New Order Reservation Received
        </h2>
        <p style="font-size: 13px; color: #64748b; margin: 0;">
          Payment Method: <strong>${paymentLabel}</strong> • ${timestamp}
        </p>
      </div>

      <!-- Customer Details Card -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0; width: 130px;">Customer Name:</td>
          <td style="font-size: 13px; font-weight: 700; color: #0f172a;">${customerName}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Customer Email:</td>
          <td style="font-size: 13px; font-weight: 700; color: #2563eb;">
            <a href="mailto:${customerEmail}" style="color: #2563eb; text-decoration: none;">${customerEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Phone:</td>
          <td style="font-size: 13px; font-weight: 600; color: #0f172a;">${customerPhone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Delivery Address:</td>
          <td style="font-size: 13px; color: #0f172a;">${deliveryAddress || 'Standard UK Courier Dispatch'} ${city ? `• ${city}` : ''} ${postcode ? `• ${postcode}` : ''}</td>
        </tr>
        ${notes ? `
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Customer Notes:</td>
          <td style="font-size: 13px; color: #0f172a; font-style: italic;">${notes}</td>
        </tr>
        ` : ''}
      </table>

      <!-- Order Items Table -->
      <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0; text-transform: uppercase;">
        Order Items
      </h3>
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 16px;">
        <thead>
          <tr style="border-bottom: 2px solid #e2e8f0; text-align: left;">
            <th style="padding: 6px 0; font-size: 11px; text-transform: uppercase; color: #64748b;">Item</th>
            <th align="center" style="padding: 6px 0; font-size: 11px; text-transform: uppercase; color: #64748b;">Qty</th>
            <th align="right" style="padding: 6px 0; font-size: 11px; text-transform: uppercase; color: #64748b;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <!-- Financial Totals -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Subtotal:</td>
          <td align="right" style="font-size: 13px; color: #0f172a; font-weight: 600;">£${subtotal.toLocaleString()}</td>
        </tr>
        ${discount > 0 ? `
        <tr>
          <td style="font-size: 13px; color: #16a34a; padding: 3px 0;">Discount Applied:</td>
          <td align="right" style="font-size: 13px; color: #16a34a; font-weight: 600;">-£${discount.toLocaleString()}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="font-size: 13px; color: #64748b; padding: 3px 0;">UK Tracked Shipping:</td>
          <td align="right" style="font-size: 13px; color: #16a34a; font-weight: 700;">${shipping === 0 ? 'FREE' : `£${shipping}`}</td>
        </tr>
        <tr style="border-top: 1px solid #cbd5e1;">
          <td style="font-size: 15px; font-weight: 800; color: #0f172a; padding: 8px 0 0 0;">Total Amount:</td>
          <td align="right" style="font-size: 18px; font-weight: 900; color: #2563eb; padding: 8px 0 0 0;">£${total.toLocaleString()}</td>
        </tr>
      </table>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${customerEmail}?subject=Order%20Reservation%20%23${orderReference}%20-%20DirtVolt%20UK" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 700; display: inline-block;">
          Contact Customer Directly &rarr;
        </a>
      </div>
    `, `New Order #${orderReference} from ${customerName}`);

    const result = await sendZohoMail({
      to: config.salesEmail,
      replyTo: customerEmail,
      subject: `[New Order Reservation #${orderReference}] ${paymentLabel} - £${total.toLocaleString()}`,
      text: `Order #${orderReference}\nCustomer: ${customerName} (${customerEmail})\nTotal: £${total}\nPayment Method: ${paymentLabel}`,
      html: salesNotificationHtml,
    });

    if (!result.success) {
      setStatus(500);
      sendJson({ error: result.error || 'Failed to dispatch order notification via Zoho Mail.' });
      return;
    }

    // 2. Order Confirmation Copy to Customer
    if (config.isConfigured) {
      try {
        await sendZohoMail({
          to: customerEmail,
          subject: `Order Confirmation #${orderReference} - DirtVolt UK`,
          text: `Dear ${customerName},\n\nThank you for ordering with DirtVolt UK. Your machine has been reserved in our UK warehouse under reference #${orderReference}.\n\nTotal Amount: £${total.toLocaleString()}\nPayment Method: ${paymentLabel}\n\nOur UK dispatch team is preparing your official invoice and tracking details.\n\nDirtVolt UK Customer Operations\nFreephone: 0800 892 4410\nsales@ebikessale.online`,
          html: wrapHtmlTemplate(`
            <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0;">
              Your Order Has Been Reserved
            </h2>
            <p style="font-size: 14px; line-height: 22px; color: #475569; margin: 0 0 16px 0;">
              Dear <strong>${customerName}</strong>, thank you for your order with DirtVolt UK. Your order reference is <strong style="color: #2563eb; font-family: monospace;">#${orderReference}</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Total Amount:</td>
                  <td style="font-size: 14px; font-weight: 800; color: #0f172a;">£${total.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; padding: 3px 0;">Payment Method:</td>
                  <td style="font-size: 13px; font-weight: 600; color: #0f172a;">${paymentLabel}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; padding: 3px 0;">UK Delivery:</td>
                  <td style="font-size: 13px; font-weight: 600; color: #16a34a;">Free 24-48h Tracked Courier</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 13px; line-height: 20px; color: #475569;">
              Our London headquarters will review your reservation and issue your courier tracking link or payment instructions shortly. If you need any assistance, simply reply directly to this email or call <strong>0800 892 4410</strong>.
            </p>
          `, `Your DirtVolt order #${orderReference} is confirmed.`),
        });
      } catch (custErr) {
        console.warn('Customer order email error (non-fatal):', custErr);
      }
    }

    setStatus(200);
    sendJson({
      success: true,
      orderReference,
      message: 'Order reservation processed and confirmed via Zoho Mail.',
      simulated: result.simulated,
      error: result.error
    });
  } catch (error: any) {
    console.error('Order handler error:', error);
    setStatus(500);
    sendJson({ error: error?.message || 'Internal Server Error' });
  }
}
