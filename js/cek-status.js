// ═══════════════════════════════
//  CEK-STATUS.JS
// ═══════════════════════════════

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

document.getElementById('btnCek')?.addEventListener('click', cekStatus);
document.getElementById('cekInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') cekStatus(); });

function cekStatus() {
  const val = (document.getElementById('cekInput')?.value || '').trim().toLowerCase();
  if (!val) { showToast('Masukkan ID pesanan atau nomor HP!', '⚠️'); return; }

  const orders = getOrders();
  const found = orders.find(o =>
    o.id.toLowerCase() === val ||
    o.nomor.replace(/[-\s]/g,'').includes(val.replace(/[-\s]/g,''))
  );

  document.getElementById('cekResult').style.display = 'none';
  document.getElementById('cekEmpty').style.display = 'none';

  if (found) showResult(found);
  else document.getElementById('cekEmpty').style.display = 'block';
}

const METODE_LABEL = { dana: 'DANA', seabank: 'SeaBank' };

function showResult(o) {
  const stEl = document.getElementById('rStatus');
  stEl.textContent = o.status === 'sukses' ? '✓ Berhasil' : o.status === 'gagal' ? '✗ Gagal' : '⏳ Menunggu';
  stEl.className = 'status-pill ' + o.status;

  document.getElementById('rOid').textContent = o.id;
  document.getElementById('rProduk').textContent = o.produkNama;
  document.getElementById('rOperator').textContent = o.op.toUpperCase();
  document.getElementById('rNomor').textContent = o.nomor;
  document.getElementById('rTotal').textContent = fmtRp(o.total);
  document.getElementById('rMetode').textContent = METODE_LABEL[o.metode] || o.metode;
  document.getElementById('rTgl').textContent = o.tanggal;

  const note = document.getElementById('rNote');
  if (o.status === 'pending') {
    note.style.display = 'block';
    note.textContent = '⏳ Pesanan menunggu konfirmasi pembayaran. Jika sudah bayar, segera konfirmasi ke CS WhatsApp kami dengan menyertakan ID pesanan dan bukti transfer.';
  } else {
    note.style.display = 'none';
  }

  document.getElementById('cekResult').style.display = 'block';
}

// Riwayat
function renderRiwayat() {
  const orders = getOrders();
  const sec  = document.getElementById('riwayatSection');
  const list = document.getElementById('riwayatList');
  if (!list) return;

  if (orders.length === 0) { if(sec) sec.style.display = 'none'; return; }
  if (sec) sec.style.display = 'block';

  list.innerHTML = orders.map(o => `
    <div class="riwayat-item" onclick="document.getElementById('cekInput').value='${o.id}'; cekStatus()">
      <div class="ri-left">
        <div class="ri-nama">${o.produkNama}</div>
        <div class="ri-id">${o.id} · ${o.nomor}</div>
      </div>
      <div class="ri-right">
        <div class="ri-harga">${fmtRp(o.total)}</div>
        <div class="ri-tgl">${o.tanggal}</div>
      </div>
    </div>
  `).join('');
}

renderRiwayat();
