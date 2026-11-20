import { EUROPEAN_COUNTRIES, STATIC_TRANSLATIONS } from '../data/translations';

const STORAGE_COUNTRY_KEY = 'dirtvolt_site_country_v1';
const CACHE_PREFIX = 'dirtvolt_tr_cache_v1_';

// Tracks original English content of each live DOM Text node without altering its parentNode (100% React-safe)
const originalTextMap = new WeakMap<Text, string>();
const lastAppliedTextMap = new WeakMap<Text, string>();

// Tracks original attributes (placeholder, title) per Element
const originalAttrMap = new WeakMap<Element, Map<string, string>>();
const lastAppliedAttrMap = new WeakMap<Element, Map<string, string>>();

// In-memory translation caches per language
const memoryCaches: Record<string, Map<string, string>> = {};

let activeLanguage = 'en';
let observer: MutationObserver | null = null;
let pendingFrame: number | null = null;
let isApplyingMutations = false;
let inFlightRequests = 0;

type StatusListener = (translating: boolean) => void;
const statusListeners = new Set<StatusListener>();

function notifyStatus() {
  const translating = inFlightRequests > 0;
  statusListeners.forEach((cb) => cb(translating));
}

export function subscribeTranslationStatus(cb: StatusListener): () => void {
  statusListeners.add(cb);
  cb(inFlightRequests > 0);
  return () => statusListeners.delete(cb);
}

export function getSavedCountryCode(): string {
  try {
    const saved = localStorage.getItem(STORAGE_COUNTRY_KEY);
    if (saved && EUROPEAN_COUNTRIES.some((c) => c.countryCode === saved)) {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return 'GB';
}

function getCache(lang: string): Map<string, string> {
  if (!memoryCaches[lang]) {
    const map = new Map<string, string>();
    // Seed with curated static dictionary first
    const staticDict = STATIC_TRANSLATIONS[lang];
    if (staticDict) {
      for (const [k, v] of Object.entries(staticDict)) {
        map.set(k, v);
      }
    }
    // Hydrate from localStorage cache
    try {
      const raw = localStorage.getItem(`${CACHE_PREFIX}${lang}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          for (const [k, v] of Object.entries(parsed)) {
            if (typeof v === 'string' && !map.has(k)) {
              map.set(k, v);
            }
          }
        }
      }
    } catch {
      // ignore corrupted cache
    }
    memoryCaches[lang] = map;
  }
  return memoryCaches[lang];
}

function persistCache(lang: string) {
  const cache = memoryCaches[lang];
  if (!cache) return;
  try {
    const entries = Array.from(cache.entries()).slice(-800);
    localStorage.setItem(`${CACHE_PREFIX}${lang}`, JSON.stringify(Object.fromEntries(entries)));
  } catch {
    // ignore quota errors
  }
}

const SKIP_TAGS = new Set([
  'SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'SVG', 'PATH', 'TEXTAREA', 'OPTION'
]);

function isExcludedElement(el: Element | null): boolean {
  let curr = el;
  while (curr) {
    if (curr.hasAttribute && curr.getAttribute('data-no-translate') === 'true') {
      return true;
    }
    if (SKIP_TAGS.has(curr.tagName)) {
      return true;
    }
    curr = curr.parentElement;
  }
  return false;
}

function shouldTranslateString(raw: string): boolean {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.length < 2) return false;
  // Must contain at least two letters
  if (!/[A-Za-z]{2,}/.test(trimmed)) return false;
  // Skip URLs, emails, SKUs, BTW/KvK codes, pure brand codes
  if (/^(https?:\/\/|www\.|[\w.+-]+@[\w-]+\.[\w.-]+)$/i.test(trimmed)) return false;
  if (/^(VT-[A-Z0-9-]+|NL\d{9}B\d{2}|SKU:\s*[A-Z0-9-]+|DIRTVOLT|SUR-RON|TALARIA|STARK VARG|E-RIDE PRO|STACYC|KTM|RFN|REVVI|GASGAS|iDEAL|SEPA|Klarna|Visa|Mastercard|Apple Pay|Google Pay|PostNL|DHL)$/i.test(trimmed)) {
    return false;
  }
  // Skip pure metric specs like "11kW", "58 kg", "85 Nm", "IP67", "€4,999", "88 km/h"
  if (/^[€$£~+-]?\s*[\d.,–-]+\s*(kW|W|V|Ah|Wh|Nm|kg|km\/h|km|mi|mph|hp|in|%|EUR|mo|\/mo|d|h|hrs)?$/i.test(trimmed)) {
    return false;
  }
  if (/^IPX?\d[K]?$/i.test(trimmed)) return false;
  return true;
}

function splitWhitespace(text: string): { lead: string; core: string; trail: string } {
  const match = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!match) return { lead: '', core: text, trail: '' };
  return { lead: match[1], core: match[2], trail: match[3] };
}

function collectTranslatableTargets(root: Node): {
  textNodes: { node: Text; orig: string; lead: string; core: string; trail: string }[];
  attrTargets: { el: Element; attr: string; orig: string; lead: string; core: string; trail: string }[];
} {
  const textNodes: { node: Text; orig: string; lead: string; core: string; trail: string }[] = [];
  const attrTargets: { el: Element; attr: string; orig: string; lead: string; core: string; trail: string }[] = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let current: Node | null = walker.currentNode;

  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      const textNode = current as Text;
      if (!isExcludedElement(textNode.parentElement)) {
        const currentVal = textNode.nodeValue || '';
        const lastApplied = lastAppliedTextMap.get(textNode);

        // If node hasn't been tracked yet OR React replaced its text with fresh English content
        if (!originalTextMap.has(textNode) || (lastApplied !== undefined && currentVal !== lastApplied)) {
          originalTextMap.set(textNode, currentVal);
        }

        const orig = originalTextMap.get(textNode) || currentVal;
        if (shouldTranslateString(orig)) {
          const { lead, core, trail } = splitWhitespace(orig);
          textNodes.push({ node: textNode, orig, lead, core, trail });
        }
      }
    } else if (current.nodeType === Node.ELEMENT_NODE) {
      const el = current as Element;
      if (!isExcludedElement(el)) {
        for (const attr of ['placeholder', 'title']) {
          const val = el.getAttribute(attr);
          if (val !== null) {
            let origMap = originalAttrMap.get(el);
            if (!origMap) {
              origMap = new Map();
              originalAttrMap.set(el, origMap);
            }
            const appliedMap = lastAppliedAttrMap.get(el);
            const lastVal = appliedMap?.get(attr);

            if (!origMap.has(attr) || (lastVal !== undefined && val !== lastVal)) {
              origMap.set(attr, val);
            }

            const orig = origMap.get(attr) || val;
            if (shouldTranslateString(orig)) {
              const { lead, core, trail } = splitWhitespace(orig);
              attrTargets.push({ el, attr, orig, lead, core, trail });
            }
          }
        }
      }
    }
    current = walker.nextNode();
  }

  return { textNodes, attrTargets };
}

function restoreEnglish(root: Node) {
  isApplyingMutations = true;
  try {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let current: Node | null = walker.currentNode;
    while (current) {
      if (current.nodeType === Node.TEXT_NODE) {
        const textNode = current as Text;
        const orig = originalTextMap.get(textNode);
        if (orig !== undefined && textNode.nodeValue !== orig) {
          textNode.nodeValue = orig;
        }
        lastAppliedTextMap.delete(textNode);
      } else if (current.nodeType === Node.ELEMENT_NODE) {
        const el = current as Element;
        const origMap = originalAttrMap.get(el);
        if (origMap) {
          origMap.forEach((origVal, attr) => {
            if (el.getAttribute(attr) !== origVal) {
              el.setAttribute(attr, origVal);
            }
          });
        }
        lastAppliedAttrMap.delete(el);
      }
      current = walker.nextNode();
    }
  } finally {
    isApplyingMutations = false;
  }
}

async function fetchBatchTranslations(texts: string[], targetLang: string): Promise<string[]> {
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetLang, texts }),
    });
    if (!response.ok) return texts;
    const data = await response.json();
    if (Array.isArray(data?.translations) && data.translations.length === texts.length) {
      return data.translations;
    }
    return texts;
  } catch {
    return texts;
  }
}

async function translateSubtree(root: Node, targetLang: string) {
  if (targetLang === 'en') {
    restoreEnglish(root);
    return;
  }

  const cache = getCache(targetLang);
  const { textNodes, attrTargets } = collectTranslatableTargets(root);

  const missingSet = new Set<string>();

  // First pass: apply everything already in instant dictionary / cache synchronously (0ms)
  isApplyingMutations = true;
  try {
    for (const item of textNodes) {
      const cached = cache.get(item.core);
      if (cached !== undefined) {
        const nextVal = `${item.lead}${cached}${item.trail}`;
        if (item.node.nodeValue !== nextVal) {
          item.node.nodeValue = nextVal;
        }
        lastAppliedTextMap.set(item.node, nextVal);
      } else {
        missingSet.add(item.core);
      }
    }

    for (const item of attrTargets) {
      const cached = cache.get(item.core);
      if (cached !== undefined) {
        const nextVal = `${item.lead}${cached}${item.trail}`;
        if (item.el.getAttribute(item.attr) !== nextVal) {
          item.el.setAttribute(item.attr, nextVal);
        }
        let applied = lastAppliedAttrMap.get(item.el);
        if (!applied) {
          applied = new Map();
          lastAppliedAttrMap.set(item.el, applied);
        }
        applied.set(item.attr, nextVal);
      } else {
        missingSet.add(item.core);
      }
    }
  } finally {
    isApplyingMutations = false;
  }

  if (missingSet.size === 0) return;

  // Second pass: fetch missing strings in batches from /api/translate
  const missingList = Array.from(missingSet);
  const BATCH_SIZE = 35;

  inFlightRequests++;
  notifyStatus();

  try {
    const batches: string[][] = [];
    for (let i = 0; i < missingList.length; i += BATCH_SIZE) {
      batches.push(missingList.slice(i, i + BATCH_SIZE));
    }

    // Run up to 3 batches concurrently for snappy full-page translation
    for (let i = 0; i < batches.length; i += 3) {
      if (activeLanguage !== targetLang) return;
      const chunk = batches.slice(i, i + 3);
      const results = await Promise.all(
        chunk.map((batch) => fetchBatchTranslations(batch, targetLang))
      );

      if (activeLanguage !== targetLang) return;

      chunk.forEach((batch, bIdx) => {
        const translatedBatch = results[bIdx];
        batch.forEach((origText, idx) => {
          const translated = translatedBatch[idx] || origText;
          cache.set(origText, translated);
        });
      });

      // Apply newly fetched translations immediately to live DOM nodes
      isApplyingMutations = true;
      try {
        for (const item of textNodes) {
          if (!item.node.isConnected) continue;
          const translated = cache.get(item.core);
          if (translated !== undefined) {
            const nextVal = `${item.lead}${translated}${item.trail}`;
            if (item.node.nodeValue !== nextVal) {
              item.node.nodeValue = nextVal;
            }
            lastAppliedTextMap.set(item.node, nextVal);
          }
        }
        for (const item of attrTargets) {
          if (!item.el.isConnected) continue;
          const translated = cache.get(item.core);
          if (translated !== undefined) {
            const nextVal = `${item.lead}${translated}${item.trail}`;
            if (item.el.getAttribute(item.attr) !== nextVal) {
              item.el.setAttribute(item.attr, nextVal);
            }
            let applied = lastAppliedAttrMap.get(item.el);
            if (!applied) {
              applied = new Map();
              lastAppliedAttrMap.set(item.el, applied);
            }
            applied.set(item.attr, nextVal);
          }
        }
      } finally {
        isApplyingMutations = false;
      }
    }

    persistCache(targetLang);
  } finally {
    inFlightRequests = Math.max(0, inFlightRequests - 1);
    notifyStatus();
  }
}

function scheduleRetranslate() {
  if (activeLanguage === 'en') return;
  if (pendingFrame !== null) {
    window.cancelAnimationFrame(pendingFrame);
  }
  pendingFrame = window.requestAnimationFrame(() => {
    pendingFrame = null;
    if (activeLanguage !== 'en' && document.body) {
      translateSubtree(document.body, activeLanguage);
    }
  });
}

function ensureObserver() {
  if (observer || typeof window === 'undefined' || !document.body) return;
  observer = new MutationObserver((mutations) => {
    if (isApplyingMutations || activeLanguage === 'en') return;
    let hasRelevantChange = false;
    for (const m of mutations) {
      if (m.type === 'childList' && m.addedNodes.length > 0) {
        hasRelevantChange = true;
        break;
      }
      if (m.type === 'characterData') {
        const textNode = m.target as Text;
        const lastApplied = lastAppliedTextMap.get(textNode);
        if (textNode.nodeValue !== lastApplied) {
          hasRelevantChange = true;
          break;
        }
      }
    }
    if (hasRelevantChange) {
      scheduleRetranslate();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

export function setSiteCountry(countryCode: string) {
  const entry =
    EUROPEAN_COUNTRIES.find((c) => c.countryCode === countryCode) ||
    EUROPEAN_COUNTRIES.find((c) => c.countryCode === 'GB')!;

  activeLanguage = entry.langCode;

  try {
    localStorage.setItem(STORAGE_COUNTRY_KEY, entry.countryCode);
  } catch {
    // ignore
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = `${entry.langCode}-${entry.countryCode}`;
    document.documentElement.dir = 'ltr';

    ensureObserver();
    if (document.body) {
      translateSubtree(document.body, activeLanguage);
    }
  }
}
