// ============================================
// آثر | Athar - Live data from Google Sheets
// ============================================
// HOW TO ACTIVATE:
// 1) Import the CSVs from /database into Google Sheets
//    with tab names EXACTLY: products, combos, bracelets,
//    necklaces, rings, reviews, faq, settings
// 2) Extensions → Apps Script → paste database/Code.gs.txt
// 3) Deploy → New deployment → Web app
//    Execute as: Me | Who has access: Anyone → Deploy
// 4) Paste the Web App URL below (between the quotes)
// 5) Done — the site reads prices/names live from the Sheet.
//    If the URL is empty OR offline, built-in data is used.
// ============================================
const SHEET_API_URL = "";

function __num(v, fallback) {
  if (v === "" || v === null || v === undefined) return fallback;
  const n = Number(v);
  return isNaN(n) ? fallback : n;
}
function __str(v, fallback) {
  if (v === "" || v === null || v === undefined) return fallback;
  return String(v);
}
function __normalizeProducts(rows) {
  return rows
    .filter(p => p && (__str(p.id, "") !== "" || __str(p.name, "") !== ""))
    .map(p => ({
      id: __str(p.id, ""),
      num: __num(p.num, 0),
      name: __str(p.name, ""),
      price: (p.price === "" || p.price === null || p.price === undefined) ? "" : __num(p.price, ""),
      image: __str(p.image, ""),
      desc: __str(p.desc, "")
    }));
}
function __applySheetData(j) {
  if (!j || typeof j !== "object") return false;
  let changed = false;
  if (Array.isArray(j.products) && j.products.length) { PRODUCTS = __normalizeProducts(j.products); changed = true; }
  if (Array.isArray(j.combos) && j.combos.length) { COMBOS = __normalizeProducts(j.combos); changed = true; }
  if (Array.isArray(j.bracelets) && j.bracelets.length) { BRACELETS = __normalizeProducts(j.bracelets); changed = true; }
  if (Array.isArray(j.necklaces) && j.necklaces.length) { NECKLACES = __normalizeProducts(j.necklaces); changed = true; }
  if (Array.isArray(j.rings) && j.rings.length) { RINGS = __normalizeProducts(j.rings); changed = true; }
  if (Array.isArray(j.reviews) && j.reviews.length) {
    REVIEWS = j.reviews.map(r => ({
      id: __num(r.id, 0),
      name: __str(r.name, ""),
      stars: __num(r.stars, 5),
      product: __str(r.product, ""),
      text: __str(r.text, "")
    }));
    changed = true;
  }
  if (Array.isArray(j.faq) && j.faq.length) {
    FAQS = j.faq
      .filter(f => __str(f.question, "") !== "")
      .map(f => ({ q: __str(f.question, ""), a: __str(f.answer, "") }));
    changed = true;
  }
  if (j.settings && typeof j.settings === "object") {
    const s = j.settings;
    if (s.brandName) SETTINGS.brandName = String(s.brandName);
    if (s.brandEn) SETTINGS.brandEn = String(s.brandEn);
    if (s.tagline) SETTINGS.tagline = String(s.tagline);
    if (s.whatsappNumber) SETTINGS.whatsappNumber = String(s.whatsappNumber);
    if (s.currency) SETTINGS.currency = String(s.currency);
    if (s.whatsapp) SOCIAL_LINKS.whatsapp = String(s.whatsapp);
    if (s.instagram) SOCIAL_LINKS.instagram = String(s.instagram);
    if (s.tiktok) SOCIAL_LINKS.tiktok = String(s.tiktok);
    changed = true;
  }
  return changed;
}

window.AtharLiveReady = (async function () {
  if (!SHEET_API_URL) return false;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 9000);
    const r = await fetch(SHEET_API_URL + (SHEET_API_URL.includes("?") ? "&" : "?") + "v=" + Date.now(), { cache: "no-store", signal: ctrl.signal });
    clearTimeout(timer);
    if (!r.ok) return false;
    const j = await r.json();
    return __applySheetData(j);
  } catch (e) {
    return false; // offline / bad URL → keep built-in data
  }
})();
