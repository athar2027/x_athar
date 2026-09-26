// ============================================
// آثر | Athar - Translation System
// locales: ar (default) / en
// Professional i18n with RTL/LTR and localStorage
// ============================================
const TRANSLATIONS = {
  ar: {
    // Header
    nav_home: "الرئيسية",
    nav_reviews: "آراء العملاء",
    nav_faq: "الأسئلة والاسترجاع",
    nav_contact: "تواصل معنا",
    // Hero
    hero_kicker: "Athar — Luxury Women's Accessories",
    hero_title: "خلي اكسسواراتك ديماً من <span>آثر</span>",
    hero_desc: "اقل عدد منتجات لتنفيذ أي اوردر (2) منتج",
    hero_btn_products: "منتجات آثر",
    hero_btn_reviews: "آراء العملاء",
    hero_btn_combos: "COMBOS آثر",
    live_text: "شخص يتصفح الموقع الآن",
    // Section products after hero
    section_kicker: "Athar Collection",
    section_title: "منتجات آثر",
    section_sub: "خشي اختاري كل الترندات",
    cat_accessories_title: "إكسسوارات آثر",
    cat_accessories_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    cat_accessories_badge: "88 منتج",
    cat_accessories_btn: "فتح المنتجات →",
    cat_combos_title: "COMBOS آثر",
    cat_combos_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    cat_combos_badge: "50 كومبو",
    cat_combos_btn: "فتح الكومبوهات →",
    // Shop by type — 4 lists
    type_kicker: "Shop By Type",
    type_title: "تسوقي حسب النوع",
    type_sub: "خشي اختاري كل الترندات",
    cat_bracelets_title: "انسيلات",
    cat_bracelets_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    cat_bracelets_badge: "28 منتج",
    cat_bracelets_btn: "فتح المنتجات →",
    cat_necklaces_title: "سلاسل",
    cat_necklaces_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    cat_necklaces_badge: "30 منتج",
    cat_necklaces_btn: "فتح المنتجات →",
    cat_rings_title: "خواتم",
    cat_rings_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    cat_rings_badge: "30 منتج",
    cat_rings_btn: "فتح المنتجات →",
    cat_earrings_title: "Earrings",
    cat_earrings_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    cat_earrings_badge: "30 منتج",
    cat_earrings_btn: "فتح المنتجات →",
    bracelets_kicker: "Athar Bracelets",
    bracelets_title: "انسيلات",
    bracelets_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    bracelets_list_title: "انسيلات",
    necklaces_kicker: "Athar Necklaces",
    necklaces_title: "سلاسل",
    necklaces_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    necklaces_list_title: "سلاسل",
    rings_kicker: "Athar Rings",
    rings_title: "خواتم",
    rings_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    rings_list_title: "خواتم",
    earrings_kicker: "Athar Earrings",
    earrings_title: "Earrings",
    earrings_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    earrings_list_title: "Earrings",
    // Trust strip
    trust_shipping: "توصيل لكل المحافظات",
    trust_wrap: "تغليف فاخر",
    trust_payment: "دفع 50% فقط لتأكيد الأوردر",
    trust_return: "لا يوجد استرجاع، يوجد استبدال فقط خلال 3 أيام",
    // Accessories view
    acc_kicker: "Athar Accessories",
    acc_title: "إكسسوارات آثر",
    acc_desc: "خشي خدي لفه هتطلعي ب 1000 منتج في ايدك",
    acc_list_title: "إكسسوارات آثر",
    acc_back: "← الرجوع",
    // Combos view
    combos_kicker: "Athar Combos",
    combos_title: "COMBOS آثر",
    combos_desc: "هوا انتي اكيد مش هتخرجي الا لما تعملي اوردر صح",
    combos_list_title: "COMBOS آثر",
    combos_back: "← الرجوع",
    // Reviews
    reviews_kicker: "Customer Love",
    reviews_title: "آراء العملاء",
    reviews_desc: "50 رأي من عميلات آثر — تجارب حقيقية بلهجة مصرية (بيانات تجريبية قابلة للاستبدال)",
    // FAQ
    faq_kicker: "Help & Support",
    faq_title: "الأسئلة والاسترجاع",
    faq_desc: "كل ما تحتاجين معرفته عن الطلب، الشحن، والاستبدال",
    faq_q1: "كيف يمكنني الطلب من آثر؟",
    faq_a1: "اختاري المنتج أو الكومبو اللي عجبك، اضغطي إضافة للسلة، ثم ادخلي السلة واختاري إتمام الطلب عبر واتساب. فريقنا هيتواصل معاكِ لتأكيد الطلب والعنوان.",
    faq_q2: "ما هي طرق الدفع المتاحة؟",
    faq_a2: "الدفع 50% فقط لتأكيد الأوردر، والـ 50% المتبقية عند الاستلام. متاح التحويل عبر فودافون كاش، انستا باي، أو التحويل البنكي — وسيتم تأكيد الأوردر فور وصول الـ 50%.",
    faq_q3: "كم يستغرق التوصيل؟",
    faq_a3: "وقت التوصيل من 4 إلى 5 أيام عمل، وسيصلك رسالة تأكيد قبل الشحن.",
    faq_q4: "هل يوجد شحن لجميع المحافظات؟",
    faq_a4: "أيوه، بنشحن لجميع محافظات مصر. مصاريف الشحن بتتحدد حسب المحافظة وبتظهر قبل تأكيد الطلب.",
    faq_q5: "هل يمكن استبدال المنتج؟",
    faq_a5: "لا يوجد استرجاع لأي أوردر، متاح الاستبدال فقط خلال 3 أيام من الاستلام بشرط يكون المنتج بحالته الأصلية وبدون استخدام. تواصلي معنا على واتساب لترتيب الاستبدال.",
    faq_q6: "ما هي سياسة الاسترجاع؟",
    faq_a6: "لا يوجد استرجاع، يوجد استبدال فقط خلال 3 أيام من الاستلام إذا كان المنتج به عيب مصنعي أو مختلف عن الوصف. المنتج لازم يكون بتغليفه الأصلي.",
    faq_q7: "ماذا أفعل إذا وصل المنتج به مشكلة؟",
    faq_a7: "صوري المنتج فور الاستلام وتواصلي معنا على واتساب خلال 24 ساعة. هنحل المشكلة فوراً سواء بالاستبدال أو الاسترجاع الكامل.",
    faq_q8: "كيف أتواصل مع خدمة العملاء؟",
    faq_a8: "تقدرى تتواصلي معنا عبر واتساب، انستجرام، أو تيك توك. فريق خدمة العملاء متاح يومياً من 10 صباحاً حتى 10 مساءً. روابط التواصل في أسفل الموقع.",
    // Contact
    contact_kicker: "Get In Touch",
    contact_title: "تواصل معنا",
    contact_desc: "نحن هنا لمساعدتك — تواصلي معنا عبر منصاتك المفضلة",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_desc: "01040922823",
    contact_whatsapp_btn: "فتح واتساب →",
    contact_insta: "Instagram",
    contact_insta_desc: "athar_1_11",
    contact_insta_btn: "فتح انستجرام →",
    contact_tiktok: "TikTok",
    contact_tiktok_desc: "athar_1_11",
    contact_tiktok_btn: "فتح تيك توك →",
    contact_phone: "رقم الهاتف",
    contact_phone_desc: "01040922823",
    contact_phone_btn: "اتصل الآن →",
    // Footer
    footer_tag: "إكسسوارات حريمي",
    footer_desc: "إكسسوارات من اللي قلبك يحبها",
    footer_links_title: "روابط سريعة",
    footer_social_title: "تابعينا",
    footer_copy: "© 2026 آثر — Athar. جميع الحقوق محفوظة.",
    footer_luxury: "Luxury Gold • Elegant • Feminine • Premium",
    // Product Card
    product_id: "رقم المنتج:",
    product_price_placeholder: "السعر",
    product_currency: "جنيه",
    product_desc_placeholder: "وصف المنتج",
    product_details: "عرض التفاصيل",
    product_add: "أضف للسلة",
    product_name_placeholder: "اسم المنتج",
    combo_name_placeholder: "اسم الكومبو",
    combo_desc_placeholder: "وصف الكومبو",
    // Modal
    modal_kicker_product: "Athar Collection — إكسسوار حريمي",
    modal_kicker_combo: "Athar Combo — كومبو فاخر",
    modal_badge_product: "منتج آثر",
    modal_badge_combo: "كومبو آثر",
    modal_qty: "الكمية",
    modal_add: "إضافة إلى السلة",
    modal_order: "طلب المنتج الآن",
    // Cart
    cart_title: "سلة المشتريات",
    cart_empty_title: "سلتك فارغة حالياً",
    cart_empty_desc: "أضيفي بعض إكسسوارات آثر الفاخرة",
    cart_policy: "لا يوجد استرجاع لأي أوردر، متاح الاستبدال فقط.",
    cart_delivery: "وقت التوصيل من 4 إلى 5 أيام عمل، وسيصلك رسالة تأكيد قبل الشحن.",
    cart_total: "الإجمالي",
    cart_checkout: "إتمام الطلب عبر واتساب",
    cart_continue: "متابعة التسوق",
    cart_remove: "حذف",
    cart_empty_toast: "السلة فارغة",
    cart_added: "تمت إضافة",
    cart_added_suffix: "إلى السلة",
    cart_removed: "تم حذف المنتج من السلة",
    // Misc
    lang_switch: "English",
    theme_switch: "المظهر",
    close: "إغلاق"
  },
  en: {
    // Header
    nav_home: "Home",
    nav_reviews: "Reviews",
    nav_faq: "FAQ & Returns",
    nav_contact: "Contact",
    // Hero
    hero_kicker: "Athar — Luxury Women's Accessories",
    hero_title: "Keep your accessories always from <span>Athar</span>",
    hero_desc: "Minimum order: (2) products",
    hero_btn_products: "Athar Products",
    hero_btn_reviews: "Reviews",
    hero_btn_combos: "Athar COMBOS",
    live_text: "people browsing now",
    // Section products after hero
    section_kicker: "Athar Collection",
    section_title: "Athar Products",
    section_sub: "Come pick all the trends",
    cat_accessories_title: "Athar Accessories",
    cat_accessories_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    cat_accessories_badge: "88 Products",
    cat_accessories_btn: "Open Products →",
    cat_combos_title: "Athar COMBOS",
    cat_combos_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    cat_combos_badge: "50 Combos",
    cat_combos_btn: "Open Combos →",
    // Shop by type — 4 lists
    type_kicker: "Shop By Type",
    type_title: "Shop By Type",
    type_sub: "Come pick all the trends",
    cat_bracelets_title: "Bracelets",
    cat_bracelets_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    cat_bracelets_badge: "28 Products",
    cat_bracelets_btn: "Open Products →",
    cat_necklaces_title: "Necklaces",
    cat_necklaces_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    cat_necklaces_badge: "30 Products",
    cat_necklaces_btn: "Open Products →",
    cat_rings_title: "Rings",
    cat_rings_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    cat_rings_badge: "30 Products",
    cat_rings_btn: "Open Products →",
    cat_earrings_title: "Earrings",
    cat_earrings_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    cat_earrings_badge: "30 Products",
    cat_earrings_btn: "Open Products →",
    bracelets_kicker: "Athar Bracelets",
    bracelets_title: "Bracelets",
    bracelets_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    bracelets_list_title: "Bracelets",
    necklaces_kicker: "Athar Necklaces",
    necklaces_title: "Necklaces",
    necklaces_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    necklaces_list_title: "Necklaces",
    rings_kicker: "Athar Rings",
    rings_title: "Rings",
    rings_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    rings_list_title: "Rings",
    earrings_kicker: "Athar Earrings",
    earrings_title: "Earrings",
    earrings_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    earrings_list_title: "Earrings",
    // Trust strip
    trust_shipping: "Delivery to all governorates",
    trust_wrap: "Luxury packaging",
    trust_payment: "Pay 50% to confirm order",
    trust_return: "No returns, exchange only within 3 days",
    // Accessories view
    acc_kicker: "Athar Accessories",
    acc_title: "Athar Accessories",
    acc_desc: "Come take a look around, you'll leave with 1000 products in your hands",
    acc_list_title: "Athar Accessories",
    acc_back: "← Back",
    // Combos view
    combos_kicker: "Athar Combos",
    combos_title: "Athar COMBOS",
    combos_desc: "You're definitely not leaving without placing an order, right?",
    combos_list_title: "Athar COMBOS",
    combos_back: "← Back",
    // Reviews
    reviews_kicker: "Customer Love",
    reviews_title: "Reviews",
    reviews_desc: "50 reviews from Athar customers — real experiences (demo data)",
    // FAQ
    faq_kicker: "Help & Support",
    faq_title: "FAQ & Returns",
    faq_desc: "Everything you need to know about ordering, shipping and exchange",
    faq_q1: "How can I order from Athar?",
    faq_a1: "Choose the product or combo you like, click Add to Cart, then open the cart and checkout via WhatsApp. Our team will contact you to confirm the order and address.",
    faq_q2: "What payment methods are available?",
    faq_a2: "Pay 50% only to confirm the order, the remaining 50% on delivery. Available via Vodafone Cash, InstaPay or bank transfer — order confirmed upon receiving 50%.",
    faq_q3: "How long does delivery take?",
    faq_a3: "Delivery time is 4 to 5 business days, and you will receive a confirmation message before shipping.",
    faq_q4: "Do you ship to all governorates?",
    faq_a4: "Yes, we ship to all governorates in Egypt. Shipping fees depend on the governorate and appear before order confirmation.",
    faq_q5: "Can I exchange the product?",
    faq_a5: "No returns for any order, exchange only within 3 days of receipt provided the product is in its original condition and unused. Contact us on WhatsApp to arrange exchange.",
    faq_q6: "What is the return policy?",
    faq_a6: "No returns, exchange only within 3 days of receipt if the product has a manufacturing defect or differs from description. Product must be in original packaging.",
    faq_q7: "What if the product arrives with an issue?",
    faq_a7: "Photograph the product upon receipt and contact us on WhatsApp within 24 hours. We will solve the issue immediately via exchange.",
    faq_q8: "How do I contact customer service?",
    faq_a8: "You can contact us via WhatsApp, Instagram or TikTok. Customer service is available daily from 10 AM to 10 PM. Links are in the footer.",
    // Contact
    contact_kicker: "Get In Touch",
    contact_title: "Contact Us",
    contact_desc: "We're here to help — contact us via your favorite platform",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_desc: "01040922823",
    contact_whatsapp_btn: "Open WhatsApp →",
    contact_insta: "Instagram",
    contact_insta_desc: "athar_1_11",
    contact_insta_btn: "Open Instagram →",
    contact_tiktok: "TikTok",
    contact_tiktok_desc: "athar_1_11",
    contact_tiktok_btn: "Open TikTok →",
    contact_phone: "Phone",
    contact_phone_desc: "01040922823",
    contact_phone_btn: "Call Now →",
    // Footer
    footer_tag: "Women's Accessories",
    footer_desc: "Accessories your heart loves",
    footer_links_title: "Quick Links",
    footer_social_title: "Follow Us",
    footer_copy: "© 2026 Athar — All rights reserved.",
    footer_luxury: "Luxury Gold • Elegant • Feminine • Premium",
    // Product Card
    product_id: "Product ID:",
    product_price_placeholder: "Price",
    product_currency: "EGP",
    product_desc_placeholder: "Product description",
    product_details: "View Details",
    product_add: "Add to Cart",
    product_name_placeholder: "Product Name",
    combo_name_placeholder: "Combo Name",
    combo_desc_placeholder: "Combo description",
    // Modal
    modal_kicker_product: "Athar Collection — Women's Accessory",
    modal_kicker_combo: "Athar Combo — Luxury Combo",
    modal_badge_product: "Athar Product",
    modal_badge_combo: "Athar Combo",
    modal_qty: "Quantity",
    modal_add: "Add to Cart",
    modal_order: "Order Now",
    // Cart
    cart_title: "Shopping Cart",
    cart_empty_title: "Your cart is empty",
    cart_empty_desc: "Add some Athar luxury accessories",
    cart_policy: "No returns for any order, exchange only.",
    cart_delivery: "Delivery 4-5 business days, confirmation message before shipping.",
    cart_total: "Total",
    cart_checkout: "Checkout via WhatsApp",
    cart_continue: "Continue Shopping",
    cart_remove: "Remove",
    cart_empty_toast: "Cart is empty",
    cart_added: "Added",
    cart_added_suffix: "to cart",
    cart_removed: "Product removed from cart",
    // Misc
    lang_switch: "العربية",
    theme_switch: "Theme",
    close: "Close"
  }
};

function safeGet(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }
function safeSet(k,v){ try { localStorage.setItem(k,v); } catch(e){} }
let currentLang = safeGet('athar_lang') || 'ar';
let currentTheme = safeGet('athar_theme') || 'gold';

function applyLanguage(lang){
  currentLang = lang;
  safeSet('athar_lang', lang);
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key];
    if(val !== undefined){
      // Allow HTML in some keys (hero_title contains span)
      if(key === 'hero_title'){
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });
  // Update placeholders, aria, etc. handled separately
  updateDynamicTexts();
  // Update lang button text
  const langText = document.getElementById('langText');
  if(langText) langText.textContent = lang === 'ar' ? 'EN' : 'AR';
  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.title = lang === 'ar' ? 'English' : 'العربية';
}

function t(key){
  return TRANSLATIONS[currentLang][key] || key;
}

function updateDynamicTexts(){
  // Update FAQ if rendered
  const faqList = document.getElementById('faqList');
  if(faqList && typeof FAQS !== 'undefined'){
    // Re-render FAQ with current language
    const faqData = currentLang === 'ar' ? [
      {q: t('faq_q1'), a: t('faq_a1')},
      {q: t('faq_q2'), a: t('faq_a2')},
      {q: t('faq_q3'), a: t('faq_a3')},
      {q: t('faq_q4'), a: t('faq_a4')},
      {q: t('faq_q5'), a: t('faq_a5')},
      {q: t('faq_q6'), a: t('faq_a6')},
      {q: t('faq_q7'), a: t('faq_a7')},
      {q: t('faq_q8'), a: t('faq_a8')},
    ] : [
      {q: t('faq_q1'), a: t('faq_a1')},
      {q: t('faq_q2'), a: t('faq_a2')},
      {q: t('faq_q3'), a: t('faq_a3')},
      {q: t('faq_q4'), a: t('faq_a4')},
      {q: t('faq_q5'), a: t('faq_a5')},
      {q: t('faq_q6'), a: t('faq_a6')},
      {q: t('faq_q7'), a: t('faq_a7')},
      {q: t('faq_q8'), a: t('faq_a8')},
    ];
    faqList.innerHTML = faqData.map((f,i)=> `
      <div class="faq-item ${i===0?'open':''}">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>${f.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer"><div class="faq-answer-inner"><p>${f.a}</p></div></div>
      </div>
    `).join('');
  }
  // Update cart policy/delivery if exists
  const cartPolicy = document.querySelector('.cart-policy');
  if(cartPolicy) cartPolicy.textContent = t('cart_policy');
  const cartDelivery = document.querySelector('.cart-delivery');
  if(cartDelivery) cartDelivery.textContent = t('cart_delivery');
}

function applyTheme(theme){
  currentTheme = theme;
  safeSet('athar_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('themeBtn');
  if(themeBtn){
    themeBtn.title = theme === 'gold' ? 'Mauve' : 'Gold';
    themeBtn.classList.toggle('active', theme === 'burgundy');
  }
}

function toggleLanguage(){
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage(newLang);
  // Re-render products to update card texts (price placeholder etc.)
  if(typeof renderHome === 'function') renderHome();
  if(typeof renderCart === 'function') renderCart();
  if(typeof repaintLive === 'function') repaintLive();
}

function toggleTheme(){
  const newTheme = currentTheme === 'gold' ? 'burgundy' : 'gold';
  applyTheme(newTheme);
}

// Init on load
document.addEventListener('DOMContentLoaded', ()=>{
  applyLanguage(currentLang);
  applyTheme(currentTheme);
  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.addEventListener('click', toggleLanguage);
  const themeBtn = document.getElementById('themeBtn');
  if(themeBtn) themeBtn.addEventListener('click', toggleTheme);
});

// Expose
window.t = t;
window.applyLanguage = applyLanguage;
window.applyTheme = applyTheme;
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
