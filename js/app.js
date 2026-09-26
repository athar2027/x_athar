// ============================================
// آثر | Athar - App Logic
// ============================================

let cart = [];
try { cart = JSON.parse(localStorage.getItem('athar_cart') || '[]'); } catch(e){ cart = []; }
let currentProduct = null;
let currentQty = 1;

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function saveCart(){
  try { localStorage.setItem('athar_cart', JSON.stringify(cart)); } catch(e){}
  updateCartCount();
  renderCart();
}
function updateCartCount(){
  const total = cart.reduce((s,i)=> s + i.qty, 0);
  const el = $('#cartCount');
  el.textContent = total;
  el.style.display = total>0 ? 'flex' : 'none';
}
function showToast(msg){
  const t=$('#toast');
  t.innerHTML='<span class="toast-dot"></span>'+msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer=setTimeout(()=>t.classList.remove('show'),2600);
}

// Reusable card renderers — with i18n
function productCardHTML(p, type='product'){
  const isCombo = type==='combo';
  const badge = isCombo ? (typeof t==='function' ? t('cat_combos_badge').split(' ')[0] : 'كومبو') : 'آثر';
  // Use placeholder translations if price/name empty
  const displayName = p.name && p.name !== 'اسم المنتج' && p.name !== 'اسم الكومبو' ? p.name : (typeof t==='function' ? (isCombo ? t('combo_name_placeholder') : t('product_name_placeholder')) : p.name);
  const displayDesc = p.desc && p.desc !== 'وصف المنتج' && p.desc !== 'وصف الكومبو' ? p.desc : (typeof t==='function' ? (isCombo ? t('combo_desc_placeholder') : t('product_desc_placeholder')) : p.desc);
  const displayPrice = p.price !== "" && p.price !== null && p.price !== undefined ? Number(p.price).toLocaleString(currentLang==='ar'?'ar-EG':'en-US') : (typeof t==='function' ? t('product_price_placeholder') : 'السعر');
  const currency = p.price !== "" && p.price !== null && p.price !== undefined ? (typeof t==='function' ? t('product_currency') : 'جنيه') : '';
  const idLabel = typeof t==='function' ? t('product_id') : 'رقم المنتج:';
  const detailsLabel = typeof t==='function' ? t('product_details') : 'عرض التفاصيل';
  const addLabel = typeof t==='function' ? t('product_add') : 'أضف للسلة';
  const descHtml = `<p class="card-desc">${displayDesc}</p>`;
  return `
  <div class="product-card ${isCombo?'combo-card':''}">
    <div class="card-img-wrap card-clickable" onclick="openModal('${p.id}')">
      <img src="${p.image}" alt="${displayName}" loading="lazy" decoding="async" onerror="this.src='https://via.placeholder.com/600x600/1B1E24/C9A86A?text=IMAGE+PLACEHOLDER'">
      <span class="card-badge">${badge} • ${p.id}</span>
    </div>
    <div class="card-body">
      <h3 class="card-name">${displayName}</h3>
      <p class="card-id">${idLabel} ${p.id} — #${String(p.num).padStart(2,'0')}</p>
      ${descHtml}
      <div class="card-price-row">
        <span class="card-price">${displayPrice}</span>
        <span class="card-currency">${currency}</span>
      </div>
      <div class="card-actions">
        <button class="btn-card btn-card-ghost" onclick="openModal('${p.id}')">${detailsLabel}</button>
        <button class="btn-card btn-card-primary" onclick="addToCartById('${p.id}',1)">${addLabel}</button>
      </div>
    </div>
  </div>`;
}

function reviewCardHTML(r){
  const stars = '★'.repeat(r.stars) + '☆'.repeat(5-r.stars);
  return `
  <div class="review-card">
    <div class="review-top">
      <span class="review-name">${r.name}</span>
      <span class="review-num">Review ${String(r.id).padStart(2,'0')}</span>
    </div>
    <div class="stars">${stars}</div>
    <span class="review-product">${r.product}</span>
    <p class="review-text">“${r.text}”</p>
  </div>`;
}

function getAllItems(){
  const extra = [];
  if(typeof BRACELETS !== 'undefined') extra.push(...BRACELETS);
  if(typeof NECKLACES !== 'undefined') extra.push(...NECKLACES);
  if(typeof RINGS !== 'undefined') extra.push(...RINGS);
  if(typeof EARRINGS !== 'undefined') extra.push(...EARRINGS);
  return [...PRODUCTS, ...COMBOS, ...extra];
}
function findById(id){
  return getAllItems().find(p=>p.id===id);
}

// Render functions — قسم منتجات آثر بعد الهيرو (100 + 50 مقاس 4×4 سم)
function renderHome(){
  // قسم منتجات آثر بعد الهيرو — جاهز للتعديل في أي وقت
  const accGrid = document.getElementById('accessoriesGrid');
  if(accGrid) accGrid.innerHTML = PRODUCTS.map(p=> productCardHTML(p,'product')).join('');
  const comboGrid = document.getElementById('combosGridAfterHero');
  if(comboGrid) comboGrid.innerHTML = COMBOS.map(p=> productCardHTML(p,'combo')).join('');
  const braGrid = document.getElementById('braceletsGrid');
  if(braGrid && typeof BRACELETS !== 'undefined') braGrid.innerHTML = BRACELETS.map(p=> productCardHTML(p,'product')).join('');
  const necGrid = document.getElementById('necklacesGrid');
  if(necGrid && typeof NECKLACES !== 'undefined') necGrid.innerHTML = NECKLACES.map(p=> productCardHTML(p,'product')).join('');
  const rinGrid = document.getElementById('ringsGrid');
  if(rinGrid && typeof RINGS !== 'undefined') rinGrid.innerHTML = RINGS.map(p=> productCardHTML(p,'product')).join('');

  // توافق خلفي إذا بقيت عناصر قديمة
  const legacy = document.getElementById('homeProductsGrid');
  if(legacy) legacy.innerHTML = PRODUCTS.slice(0,8).map(p=> productCardHTML(p,'product')).join('');
}
function renderReviews(){
  $('#reviewsGrid').innerHTML = REVIEWS.map(r=> reviewCardHTML(r)).join('');
}
function renderFAQ(){
  $('#faqList').innerHTML = FAQS.map((f,i)=> `
    <div class="faq-item ${i===0?'open':''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer"><div class="faq-answer-inner"><p>${f.a}</p></div></div>
    </div>
  `).join('');
}
function toggleFaq(btn){
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  $$('.faq-item').forEach(el=> el.classList.remove('open'));
  $$('.faq-icon').forEach(ic=> ic.textContent='+');
  if(!wasOpen){
    item.classList.add('open');
    item.querySelector('.faq-icon').textContent='—';
  }
}

function updateSocialLinks(){
  const cw = $('#contactWhatsapp'); if(cw) cw.href = SOCIAL_LINKS.whatsapp;
  const ci = $('#contactInstagram'); if(ci) ci.href = SOCIAL_LINKS.instagram;
  const ct = $('#contactTiktok'); if(ct) ct.href = SOCIAL_LINKS.tiktok;
  const cf = $('#contactFacebook'); if(cf) cf.href = SOCIAL_LINKS.facebook;
  const fw = $('#footerWhatsapp'); if(fw) fw.href = SOCIAL_LINKS.whatsapp;
  const fi = $('#footerInstagram'); if(fi) fi.href = SOCIAL_LINKS.instagram;
  const ft = $('#footerTiktok'); if(ft) ft.href = SOCIAL_LINKS.tiktok;
  const ff = $('#footerFacebook'); if(ff) ff.href = SOCIAL_LINKS.facebook;
}

// Navigation
let currentView = 'home';
const scrollMemory = {};
const LIST_VIEWS = ['accessories','combos','bracelets','necklaces','rings'];
function switchView(view, push=true){
  const outgoing = currentView;
  try { scrollMemory[outgoing] = window.scrollY; } catch(e){}
  $$('.view').forEach(v=> v.classList.remove('active'));
  const el = $('#view-'+view);
  if(el) el.classList.add('active');
  currentView = view;
  try { sessionStorage.setItem('athar_view', view); } catch(e){}
  $$('.nav-link').forEach(l=> l.classList.remove('active'));
  $$('.nav-link[data-nav="'+view+'"]').forEach(l=> l.classList.add('active'));
  // Stay in place when exiting a list back to home, else instant top
  const rootEl = document.documentElement;
  const prevSB = rootEl.style.scrollBehavior;
  rootEl.style.scrollBehavior = 'auto';
  const goHomeFromList = (view === 'home' && LIST_VIEWS.includes(outgoing) && (scrollMemory.home || 0) > 0);
  const doScroll = ()=>{ window.scrollTo(0, goHomeFromList ? scrollMemory.home : 0); };
  if(goHomeFromList){ requestAnimationFrame(()=>{ doScroll(); setTimeout(doScroll, 60); }); }
  else { doScroll(); }
  rootEl.style.scrollBehavior = prevSB;
  closeMobileNav();
  // Pause ALL videos first (hidden ones drain the phone), then play active view's
  document.querySelectorAll('video').forEach(v=>{ try{ v.pause(); }catch(e){} });
  if(el) el.querySelectorAll('video').forEach(v=>{ v.muted = true; const pr = v.play(); if(pr) pr.catch(()=>{}); });
  // History entry so phone edge-swipe goes back inside the site
  if(push){ try { history.pushState({view:view}, ''); } catch(e){} }
}
// Phone back gesture: return to previous page, overlays close first
window.addEventListener('popstate', (e)=>{
  const modalOpen = document.getElementById('modalOverlay').classList.contains('open');
  const cartOpen = document.getElementById('cartDrawer').classList.contains('open');
  if(modalOpen || cartOpen){
    closeModal();
    closeCart();
  }
  const st = (e.state && e.state.view) ? e.state.view : 'home';
  if(document.getElementById('view-'+st)) switchView(st, false);
  else switchView('home', false);
});

function toggleMobileNav(){
  $('#mobileNav').classList.toggle('open');
  $('#menuToggle').classList.toggle('open');
}
function closeMobileNav(){
  $('#mobileNav').classList.remove('open');
  $('#menuToggle').classList.remove('open');
}

// Modal
function openModal(id){
  const p=findById(id);
  if(!p) return;
  currentProduct=p;
  currentQty=1;
  const isCombo=p.id.startsWith('COMBO');
  $('#modalImage').src=p.image;
  $('#modalImage').alt=p.name;
  $('#modalBadge').textContent=isCombo?'كومبو آثر':'منتج آثر';
  $('#modalKicker').textContent=isCombo?'Athar Combo — كومبو فاخر':'Athar Collection — إكسسوار حريمي';
  $('#modalTitle').textContent=p.name;
  $('#modalId').textContent=`رقم المنتج: ${p.id} • #${String(p.num).padStart(2,'0')}`;
  $('#modalDesc').textContent=p.desc;
  $('#modalPrice').textContent= p.price !== "" && p.price !== null && p.price !== undefined ? Number(p.price).toLocaleString('ar-EG') : 'السعر';
  const curEl = document.getElementById('modalPrice')?.nextElementSibling;
  if(curEl) curEl.textContent = p.price !== "" && p.price !== null && p.price !== undefined ? 'جنيه' : '';
  $('#qtyValue').textContent='1';
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  try { history.pushState({view:currentView, overlay:'modal'}, ''); } catch(e){}
}
function closeModal(){
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}

// Cart
function addToCartById(id,qty=1){
  const p=findById(id);
  if(!p) return;
  const ex=cart.find(i=>i.id===id);
  if(ex) ex.qty+=qty;
  else cart.push({id:p.id,name:p.name,price:p.price,image:p.image,qty});
  saveCart();
  showToast('المنتج اضاف الي السله يلا اختاري الي بعدو');
}
function addCurrentToCart(){
  if(!currentProduct) return;
  addToCartById(currentProduct.id, currentQty);
  // keep the card open so the user can continue (no auto-close)
}
function renderCart(){
  const body=$('#cartBody');
  if(cart.length===0){
    body.innerHTML=`<div class="cart-empty"><div style="font-size:32px;color:var(--gold)">✦</div><p>سلتك فارغة حالياً</p><p style="font-size:12px;color:var(--text-dim)">أضيفي بعض إكسسوارات آثر الفاخرة</p></div>`;
    $('#cartTotal').textContent='0 جنيه';
    return;
  }
  body.innerHTML=cart.map(item=>`
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/64x64/FFF8E8/C19A5B?text=A'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-id">${item.id}</div>
        <div class="cart-item-price">${item.price !== "" && item.price !== null ? Number(item.price).toLocaleString('ar-EG') + ' جنيه × ' + item.qty : 'السعر — × ' + item.qty}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-qty">
          <button onclick="changeCartQty('${item.id}',-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeCartQty('${item.id}',1)">+</button>
        </div>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')">حذف</button>
      </div>
    </div>
  `).join('');
  const total=cart.reduce((s,i)=> s + (Number(i.price)||0)*i.qty,0);
  $('#cartTotal').textContent= total ? total.toLocaleString('ar-EG')+' جنيه' : 'السعر —';
}
function changeCartQty(id,delta){
  const it=cart.find(i=>i.id===id);
  if(!it) return;
  it.qty+=delta;
  if(it.qty<=0) cart=cart.filter(i=>i.id!==id);
  saveCart();
}
function removeFromCart(id){
  cart=cart.filter(i=>i.id!==id);
  saveCart();
  showToast('تم حذف المنتج من السلة');
}
function openCart(){ renderCart(); $('#cartDrawer').classList.add('open'); $('#cartOverlay').classList.add('open'); document.body.style.overflow='hidden'; try { history.pushState({view:currentView, overlay:'cart'}, ''); } catch(e){} }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#cartOverlay').classList.remove('open'); document.body.style.overflow=''; }

function checkoutViaWhatsapp(){
  if(cart.length===0){ showToast('السلة فارغة'); return; }
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  let msg=`مرحباً آثر | Athar%0Aأرغب في طلب المنتجات التالية:%0A%0A`;
  cart.forEach((it,idx)=>{ msg+=`${idx+1}. ${it.name} (${it.id}) — الكمية: ${it.qty} — السعر: ${it.price} جنيه%0A`; });
  msg+=`%0Aالإجمالي: ${total.toLocaleString('ar-EG')} جنيه%0A%0Aالاسم:%0Aالعنوان:%0Aرقم التواصل:%0A`;
  window.open(`https://wa.me/${SETTINGS.whatsappNumber}?text=${msg}`,'_blank');
}
function buyNowWhatsapp(){
  if(!currentProduct) return;
  const p=currentProduct;
  let msg=`مرحباً آثر | Athar%0Aأرغب في طلب:%0A${p.name} (${p.id})%0Aالكمية: ${currentQty}%0Aالسعر: ${p.price.toLocaleString('ar-EG')} جنيه%0Aالإجمالي: ${(p.price*currentQty).toLocaleString('ar-EG')} جنيه%0A%0Aالاسم:%0Aالعنوان:%0A`;
  window.open(`https://wa.me/${SETTINGS.whatsappNumber}?text=${msg}`,'_blank');
}

document.addEventListener('DOMContentLoaded', async ()=>{
  try { await Promise.race([window.AtharLiveReady, new Promise(r=>setTimeout(r, 9000))]); } catch(e){}
  try { history.replaceState({view:'home'}, ''); } catch(e){}
  renderHome();
  renderReviews();
  renderFAQ();
  updateSocialLinks();
  updateCartCount();
  renderCart();

  $$('[data-nav]').forEach(el=>{
    el.addEventListener('click',e=>{
      e.preventDefault();
      const view=el.getAttribute('data-nav');
      if(['home','accessories','combos','bracelets','necklaces','rings','reviews','faq','contact'].includes(view)){
        switchView(view);
      }
    });
  });

  const heroBtn = document.getElementById('heroProductsBtn');
  if(heroBtn){
    heroBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      switchView('accessories');
    });
  }

  // Real live visitors counter (presence API on same server)
  const liveEl = document.getElementById('liveCount');
  const livePill = liveEl ? liveEl.closest('.live-counter') : null;
  let liveNum = 0;
  let liveOk = false;
  let clientId = null;
  try { clientId = localStorage.getItem('athar_client_id'); } catch(e){}
  if(!clientId){
    clientId = 'c-' + Math.random().toString(16).slice(2,10) + Date.now().toString(16).slice(-6);
    try { localStorage.setItem('athar_client_id', clientId); } catch(e){}
  }
  window.repaintLive = function(){
    if(!liveEl || !liveOk) return;
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ar';
    liveEl.textContent = liveNum.toLocaleString(lang==='ar'?'ar-EG':'en-US');
  };
  async function heartbeat(){
    if(document.hidden) return;
    try {
      const r = await fetch('/api/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: clientId })
      });
      if(!r.ok) throw new Error('bad');
      const d = await r.json();
      liveNum = Number(d.online) || 0;
      liveOk = true;
      window.repaintLive();
    } catch(e){
      // No API (e.g. file://) — hide counter instead of showing fake numbers
      if(livePill) livePill.style.display = 'none';
    }
  }
  heartbeat();
  setInterval(heartbeat, 8000);
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){
      document.querySelectorAll('video').forEach(v=>{ try{ v.pause(); }catch(e){} });
    } else {
      heartbeat();
      document.querySelectorAll('.view.active video').forEach(v=>{ v.muted = true; const pr = v.play(); if(pr) pr.catch(()=>{}); });
    }
  });
  // Count entry instantly on show + remove instantly on exit (real in/out)
  window.addEventListener('pageshow', ()=>{ heartbeat(); });
  window.addEventListener('pagehide', ()=>{
    try {
      const blob = new Blob([JSON.stringify({ id: clientId })], { type: 'application/json' });
      navigator.sendBeacon('/api/leave', blob);
    } catch(e){}
  });

  // Autoplay videos in the initially active view (hero video on load)
  document.querySelectorAll('.view.active video').forEach(v=>{ v.muted = true; const pr = v.play(); if(pr) pr.catch(()=>{}); });

  $('#menuToggle').addEventListener('click',toggleMobileNav);
  // mobile links already handled by the generic [data-nav] handler above —
  // only close the menu here to avoid double navigation (double history entry)
  $$('.mobile-link').forEach(l=>{
    l.addEventListener('click',()=>{ closeMobileNav(); });
  });

  $('#modalClose').addEventListener('click',closeModal);
  $('#modalOverlay').addEventListener('click',e=>{ if(e.target===$('#modalOverlay')) closeModal(); });
  $('#qtyMinus').addEventListener('click',()=>{ if(currentQty>1){ currentQty--; $('#qtyValue').textContent=currentQty; }});
  $('#qtyPlus').addEventListener('click',()=>{ if(currentQty<10){ currentQty++; $('#qtyValue').textContent=currentQty; }});
  $('#modalAddToCart').addEventListener('click',addCurrentToCart);
  $('#modalBuyNow').addEventListener('click',buyNowWhatsapp);

  $('#cartBtn').addEventListener('click',openCart);
  $('#cartClose').addEventListener('click',closeCart);
  $('#cartOverlay').addEventListener('click',closeCart);
  $('#continueShopping').addEventListener('click',closeCart);
  $('#checkoutBtn').addEventListener('click',checkoutViaWhatsapp);

  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeModal(); closeCart(); }});
  window.addEventListener('scroll',()=>{
    const h=$('#header');
    if(window.scrollY>10) h.style.boxShadow='0 4px 24px rgba(193,154,91,0.12)';
    else h.style.boxShadow='0 2px 20px rgba(193,154,91,0.08)';
    // Save scroll position to restore after refresh
    clearTimeout(window._scrollSaveT);
    window._scrollSaveT = setTimeout(()=>{ try{ sessionStorage.setItem('athar_scroll', String(window.scrollY)); }catch(e){} }, 300);
  });
  // Restore last view + scroll position after refresh (stay in place)
  try {
    const savedView = sessionStorage.getItem('athar_view');
    const savedScroll = parseInt(sessionStorage.getItem('athar_scroll') || '0', 10) || 0;
    if(savedView && savedView !== 'home' && document.getElementById('view-' + savedView)){
      switchView(savedView, false);
      try { history.replaceState({view: savedView}, ''); } catch(e){}
      if(savedScroll > 0) setTimeout(()=>{ window.scrollTo(0, savedScroll); }, 120);
    }
  } catch(e){}
});

window.openModal=openModal;
window.addToCartById=addToCartById;
window.changeCartQty=changeCartQty;
window.removeFromCart=removeFromCart;
window.toggleFaq=toggleFaq;
