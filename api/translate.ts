import type { IncomingMessage, ServerResponse } from 'http';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

interface ExtendedResponse extends ServerResponse {
  status?: (statusCode: number) => ExtendedResponse;
  json?: (data: any) => void;
}

const ALLOWED_LANGS = new Set([
  'en', 'nl', 'de', 'fr', 'es', 'pl', 'it', 'pt', 'sv', 'da', 'no', 'fi',
  'is', 'el', 'cs', 'sk', 'sl', 'hu', 'ro', 'bg', 'hr', 'sr', 'bs', 'mk',
  'sq', 'et', 'lv', 'lt', 'uk', 'be', 'ru', 'tr', 'ca', 'lb', 'mt', 'ga'
]);

const SEPARATOR = '\n[[[DV_SEP]]]\n';

async function translateViaGoogle(texts: string[], targetLang: string): Promise<string[] | null> {
  if (texts.length === 0) return [];

  // Attempt batched translation first using a unique delimiter
  const combined = texts.join(SEPARATOR);
  if (combined.length <= 4200) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
        targetLang
      )}&dt=t&q=${encodeURIComponent(combined)}`;

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7000);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; DirtVoltTranslator/1.0)',
        },
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (response.ok) {
        const data: any = await response.json();
        if (Array.isArray(data) && Array.isArray(data[0])) {
          const fullTranslated = data[0]
            .map((segment: any) => (Array.isArray(segment) ? segment[0] : ''))
            .join('');
          const parts = fullTranslated.split(/\s*\[\[\[DV_SEP\]\]\]\s*/);
          if (parts.length === texts.length) {
            return parts.map((p: string, idx: number) => (p ? p.trim() : texts[idx]));
          }
        }
      }
    } catch {
      // Fall through to parallel single-item translation
    }
  }

  // Fallback: translate items in small parallel batches
  try {
    const results = await Promise.all(
      texts.map(async (item) => {
        try {
          const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
            targetLang
          )}&dt=t&q=${encodeURIComponent(item)}`;

          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 5000);
          const resp = await fetch(url, {
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; DirtVoltTranslator/1.0)',
            },
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (!resp.ok) return item;
          const json: any = await resp.json();
          if (Array.isArray(json) && Array.isArray(json[0])) {
            const joined = json[0]
              .map((seg: any) => (Array.isArray(seg) ? seg[0] : ''))
              .join('')
              .trim();
            return joined || item;
          }
          return item;
        } catch {
          return item;
        }
      })
    );
    return results;
  } catch {
    return null;
  }
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
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
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

    const targetLang = String(body?.targetLang || 'nl').toLowerCase().trim();
    const rawTexts: unknown[] = Array.isArray(body?.texts) ? body.texts : [];

    if (!ALLOWED_LANGS.has(targetLang)) {
      setStatus(400);
      sendJson({ error: `Unsupported target language: ${targetLang}` });
      return;
    }

    const texts = rawTexts
      .slice(0, 60)
      .map((t) => (typeof t === 'string' ? t.slice(0, 1500) : ''));

    if (targetLang === 'en' || texts.length === 0) {
      setStatus(200);
      sendJson({ translations: texts });
      return;
    }

    const translated = await translateViaGoogle(texts, targetLang);

    setStatus(200);
    sendJson({
      translations: translated || texts,
      targetLang,
    });
  } catch (err: any) {
    console.error('Translation API error:', err);
    setStatus(200);
    sendJson({
      translations: Array.isArray(req.body?.texts) ? req.body.texts : [],
      fallback: true,
    });
  }
}
