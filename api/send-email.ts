import type { IncomingMessage, ServerResponse } from 'http';
import contactHandler from './contact';
import subscribeHandler from './subscribe';
import orderHandler from './order';
import quoteHandler from './quote';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

interface ExtendedResponse extends ServerResponse {
  status?: (statusCode: number) => ExtendedResponse;
  json?: (data: any) => void;
}

/**
 * Unified Vercel Serverless Function Dispatcher.
 * Routes form submissions to specific handlers based on `formType` or payload structure.
 */
export default async function handler(req: ExtendedRequest, res: ExtendedResponse) {
  // Parse body if needed
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
      req.body = body;
    } catch {
      // let individual handler catch parse issues
    }
  }

  const formType = body?.formType || body?.type || 'contact';

  switch (formType) {
    case 'newsletter':
    case 'subscribe':
    case 'handbook':
      return subscribeHandler(req, res);
    case 'order':
    case 'checkout':
    case 'proforma':
      return orderHandler(req, res);
    case 'quote':
    case 'cycle-to-work':
    case 'c2w':
      return quoteHandler(req, res);
    case 'contact':
    default:
      return contactHandler(req, res);
  }
}
