/**
 * Client-side Form Submission API
 * Communicates with Vercel Serverless Functions (/api/*)
 * and dispatches emails through Zoho Mail SMTP (sales@ebikessales.online).
 */

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  city?: string;
  message: string;
}

export interface SubscribeFormData {
  email: string;
  source?: string;
  fullName?: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  priceGBP: number;
  sku?: string;
}

export interface OrderFormData {
  orderReference: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  deliveryAddress?: string;
  city?: string;
  postcode?: string;
  paymentMethod: string;
  items: OrderItem[];
  subtotal: number;
  discount?: number;
  shipping: number;
  total: number;
  notes?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone?: string;
  employerName: string;
  schemeName: string;
  totalPrice: number;
  bikePrice?: number;
  accessoriesPrice?: number;
  taxBand?: string;
  monthlyNetCost: number;
  totalSaved: number;
  termMonths?: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  ticketId?: string;
  orderReference?: string;
  quoteRef?: string;
  error?: string;
  simulated?: boolean;
}

async function postJson<T = any>(endpoint: string, payload: any): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        success: false,
        error: data?.error || `Server responded with status ${res.status}`,
      };
    }

    return {
      success: true,
      ...data,
    };
  } catch (err: any) {
    console.warn(`Error connecting to endpoint ${endpoint}:`, err);
    return {
      success: false,
      error: err?.message || 'A network error occurred while submitting.',
    };
  }
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  return postJson('/api/contact', data);
}

export async function submitNewsletterSubscription(email: string, source?: string): Promise<ApiResponse> {
  return postJson('/api/subscribe', { email, source });
}

export async function submitOrderReservation(data: OrderFormData): Promise<ApiResponse> {
  return postJson('/api/order', data);
}

export async function submitCycleToWorkQuote(data: QuoteFormData): Promise<ApiResponse> {
  return postJson('/api/quote', data);
}
