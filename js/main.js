// ═══════════════════════════════
//  MAIN.JS — Homepage
// ═══════════════════════════════

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// ── Operator Marquee ──
function buildMarquee() {
  const ops = [
    { name:'Telkomsel', icon:'📱' },
    { name:'Indosat Ooredoo', icon:'📶' },
    { name:'XL Axiata', icon:'📡' },
    { name:'Tri (3)', icon:'3️⃣' },
    { name:'Smartfren', icon:'⚡' },
    { name:'Axis', icon:'🔵' },
    { name:'PLN Prepaid', icon:'💡' },
    { name:'GoPay', icon:'🟢' },
    { name:'OVO', icon:'🟣' },
    { name:'DANA', icon:'💙' },
    { name:'ShopeePay', icon:'🟠' },
    { name:'By.U', icon:'🌐' },
  ];
  const el = document.getElementById('marqueeInner');
  if (!el) return;
  // Duplicate for seamless loop
  const all = [...ops, ...ops];
  el.innerHTML = all.map(o => `<span class="op-chip"><span>${o.icon}</span>${o.name}</span>`).join('');
}

// ── Produk Terlaris ──
function renderTerlaris() {
  const el = document.getElementById('produkTerlaris');
  if (!el) return;
  const list = PRODUK.filter(p => p.terlaris).slice(0, 8);
  el.innerHTML = list.map(p => kartuProduk(p)).join('');
}

function kartuProduk(p) {
  const h = hemat(p.harga, p.coret);
  return `
    <div class="produk-card${p.terlaris ? '' : ''}" onclick="window.location.href='produk.html'">
      ${p.terlaris ? '<div class="produk-badge">TERLARIS</div>' : ''}
      <div class="produk-op">${p.op.toUpperCase()}</div>
      <div class="produk-nama">${p.nama}</div>
      <div class="produk-desc">${p.desc}</div>
      <div class="produk-price-wrap">
        <div class="produk-price">${fmtRp(p.harga)}</div>
        ${p.coret ? `<div class="produk-coret">${fmtRp(p.coret)}</div>` : ''}
      </div>
      ${h ? `<div class="produk-hemat">✓ ${h}</div>` : '<div style="margin-bottom:16px"></div>'}
      <button class="btn-beli">Beli Sekarang</button>
    </div>`;
}

buildMarquee();
renderTerlaris();
