// ═══════════════════════════════
//  PRODUK.JS
// ═══════════════════════════════

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

let selKat = 'semua';
let selOp  = 'semua';
let selProduk = null;
let selMetode = null;

// ── Read URL params ──
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('kat')) {
  selKat = urlParams.get('kat');
}

// ── Render produk ──
function renderProduk() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const filtered = PRODUK.filter(p => {
    const okKat = selKat === 'semua' || p.kat === selKat;
    const okOp  = selOp === 'semua' || p.op === selOp;
    const okQ   = !q || p.nama.toLowerCase().includes(q) || p.op.includes(q) || p.desc.toLowerCase().includes(q);
    return okKat && okOp && okQ;
  });

  const el = document.getElementById('produkList');
  const countEl = document.getElementById('produkCount');
  if (!el) return;

  if (countEl) countEl.textContent = `Menampilkan ${filtered.length} produk`;

  if (filtered.length === 0) {
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
      <div style="font-size:3rem;margin-bottom:12px;opacity:.4;">🔍</div>
      <p style="color:var(--text2);">Tidak ada produk yang cocok.</p>
    </div>`;
    return;
  }

  el.innerHTML = filtered.map(p => {
    const h = hemat(p.harga, p.coret);
    return `
    <div class="produk-card">
      ${p.terlaris ? '<div class="produk-badge">TERLARIS</div>' : ''}
      <div class="produk-op">${p.op.toUpperCase()}</div>
      <div class="produk-nama">${p.nama}</div>
      <div class="produk-desc">${p.desc}</div>
      <div class="produk-price-wrap">
        <div class="produk-price">${fmtRp(p.harga)}</div>
        ${p.coret ? `<div class="produk-coret">${fmtRp(p.coret)}</div>` : ''}
      </div>
      ${h ? `<div class="produk-hemat">✓ ${h}</div>` : '<div style="margin-bottom:16px"></div>'}
      <button class="btn-beli" onclick="bukaBeli('${p.id}')">Beli Sekarang</button>
    </div>`;
  }).join('');
}

// ── Chips filter ──
function setupChips() {
  // Kat
  const katChips = document.querySelectorAll('#chipKat .chip');
  katChips.forEach(c => {
    if (c.dataset.kat === selKat) {
      katChips.forEach(x => x.classList.remove('active'));
      c.classList.add('active');
    }
    c.addEventListener('click', () => {
      katChips.forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      selKat = c.dataset.kat;
      renderProduk();
    });
  });

  // Op
  document.querySelectorAll('#chipOp .chip').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('#chipOp .chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      selOp = c.dataset.op;
      renderProduk();
    });
  });
}

document.getElementById('searchInput')?.addEventListener('input', renderProduk);

// ── Build payment methods ──
function buildPayMethods() {
  const el = document.getElementById('paymentMethods');
  if (!el) return;
  el.innerHTML = PAYMENT_METHODS.map(m => `
    <div class="pay-opt" data-id="${m.id}" onclick="selectPay('${m.id}')">
      <div class="pay-icon">${m.icon}</div>
      <div class="pay-name">${m.name}</div>
      <div class="pay-num pay-num-mask">••••••••••</div>
      <div class="pay-num pay-num-hidden">${m.num}<br/><span style="font-size:.7rem">a.n ${m.atas}</span></div>
    </div>
  `).join('');
}

function selectPay(id) {
  selMetode = PAYMENT_METHODS.find(m => m.id === id);
  document.querySelectorAll('.pay-opt').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });
  const box = document.getElementById('payInfoBox');
  if (box && selMetode) {
    box.innerHTML = `<strong>${selMetode.icon} ${selMetode.name}</strong> — No: <strong>${selMetode.num}</strong> a.n <strong>${selMetode.atas}</strong><br/>
      <span style="font-size:.75rem; margin-top:4px; display:block;">Transfer tepat sesuai nominal total, lalu konfirmasi ke WhatsApp CS.</span>`;
    box.classList.add('show');
  }
}

// ── Buka modal ──
function bukaBeli(id) {
  selProduk = PRODUK.find(p => p.id === id);
  if (!selProduk) return;
  selMetode = null;

  const info = document.getElementById('modalProdukInfo');
  if (info) {
    info.innerHTML = `
      <div class="mpi-left">
        <div class="mpi-op">${selProduk.op.toUpperCase()} • ${selProduk.kat.toUpperCase()}</div>
        <div class="mpi-nama">${selProduk.nama}</div>
        <div style="font-size:.76rem;color:var(--text2);margin-top:3px;">${selProduk.desc}</div>
      </div>
      <div class="mpi-price">${fmtRp(selProduk.harga)}</div>`;
  }

  updateTotal();
  buildPayMethods();
  document.querySelectorAll('.pay-opt').forEach(el => el.classList.remove('selected'));
  document.getElementById('payInfoBox')?.classList.remove('show');
  document.getElementById('formBeli').reset();

  document.getElementById('modalBeli').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function updateTotal() {
  if (!selProduk) return;
  const el = document.getElementById('orderTotal');
  if (el) el.innerHTML = `
    <div class="ot-row"><span>Produk</span><strong>${selProduk.nama}</strong></div>
    <div class="ot-row"><span>Operator</span><strong>${selProduk.op.toUpperCase()}</strong></div>
    <div class="ot-row ot-total"><span>Total Bayar</span><strong>${fmtRp(selProduk.harga)}</strong></div>`;
}

// ── Tutup modal ──
document.getElementById('modalClose')?.addEventListener('click', tutupModal);
document.getElementById('modalBeli')?.addEventListener('click', e => {
  if (e.target === document.getElementById('modalBeli')) tutupModal();
});
function tutupModal() {
  document.getElementById('modalBeli').style.display = 'none';
  document.body.style.overflow = '';
  selProduk = null; selMetode = null;
}

// ── Submit ──
document.getElementById('formBeli')?.addEventListener('submit', e => {
  e.preventDefault();
  if (!selProduk) return;
  if (!selMetode) { showToast('Pilih metode pembayaran terlebih dahulu!', '⚠️'); return; }

  const nomor = document.getElementById('fNomor').value.trim();
  if (!nomor) { showToast('Nomor HP tujuan wajib diisi!', '⚠️'); return; }

  const oid = generateOID();
  const order = {
    id: oid,
    produkId:   selProduk.id,
    produkNama: selProduk.nama,
    op:         selProduk.op,
    kat:        selProduk.kat,
    nomor,
    nama:       document.getElementById('fNama').value.trim(),
    kontak:     document.getElementById('fKontak').value.trim(),
    metode:     selMetode.id,
    metodeNama: selMetode.name,
    total:      selProduk.harga,
    status:     'pending',
    tanggal:    new Date().toLocaleString('id-ID'),
  };
  saveOrder(order);

  document.getElementById('modalBeli').style.display = 'none';
  document.getElementById('suksesOid').textContent = oid;
  document.getElementById('suksesMsg').textContent =
    `${selProduk.nama} untuk nomor ${nomor} berhasil dibuat. Segera konfirmasi pembayaran ${fmtRp(selProduk.harga)} via ${selMetode.name}.`;
  document.getElementById('modalSukses').style.display = 'flex';
  selProduk = null; selMetode = null;
});

document.getElementById('btnTutupSukses')?.addEventListener('click', () => {
  document.getElementById('modalSukses').style.display = 'none';
  document.body.style.overflow = '';
});
document.getElementById('modalSukses')?.addEventListener('click', e => {
  if (e.target === document.getElementById('modalSukses')) {
    document.getElementById('modalSukses').style.display = 'none';
    document.body.style.overflow = '';
  }
});

// ── Init ──
setupChips();
renderProduk();
