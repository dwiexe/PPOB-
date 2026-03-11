// ═══════════════════════════════════════
//  FANTASY STORE — DATA & CONFIG
// ═══════════════════════════════════════

const STORE = {
  name:    'Fantasy Store',
  tagline: 'PPOB Terpercaya #1',
  wa:      '085783385872',
  email:   'aswdwi@gmail.com',
  ig:      '@fantasystore.id',
  tg:      '@fantasystore',
};

// Payment methods (nomor tersembunyi, tampil saat dipilih)
const PAYMENT_METHODS = [
  {
    id:    'dana',
    name:  'DANA',
    icon:  '💙',
    color: '#1A8CFF',
    num:   '087788486916',
    atas:  'Fantasy Store',
  },
  {
    id:    'seabank',
    name:  'SeaBank',
    icon:  '🌊',
    color: '#2ECC71',
    num:   '901976839823',
    atas:  'Fantasy Store',
  },
];

// ═══════════════════════════════════════
//  PRODUK PPOB
// ═══════════════════════════════════════
const PRODUK = [

  // ─── PULSA ───────────────────────────
  { id:'pls-tsel-5',   kat:'pulsa', op:'telkomsel', nama:'Pulsa Telkomsel 5.000',    desc:'Masa aktif 3 hari',                 harga:5800,   coret:7000,   terlaris:false },
  { id:'pls-tsel-10',  kat:'pulsa', op:'telkomsel', nama:'Pulsa Telkomsel 10.000',   desc:'Masa aktif 7 hari',                 harga:11200,  coret:13000,  terlaris:false },
  { id:'pls-tsel-20',  kat:'pulsa', op:'telkomsel', nama:'Pulsa Telkomsel 20.000',   desc:'Masa aktif 14 hari',                harga:21200,  coret:23500,  terlaris:true  },
  { id:'pls-tsel-50',  kat:'pulsa', op:'telkomsel', nama:'Pulsa Telkomsel 50.000',   desc:'Masa aktif 30 hari',                harga:51200,  coret:55000,  terlaris:true  },
  { id:'pls-tsel-100', kat:'pulsa', op:'telkomsel', nama:'Pulsa Telkomsel 100.000',  desc:'Masa aktif 30 hari',                harga:101200, coret:106000, terlaris:false },
  { id:'pls-isat-5',   kat:'pulsa', op:'indosat',   nama:'Pulsa Indosat 5.000',      desc:'Masa aktif 3 hari',                 harga:5500,   coret:7000,   terlaris:false },
  { id:'pls-isat-10',  kat:'pulsa', op:'indosat',   nama:'Pulsa Indosat 10.000',     desc:'Masa aktif 7 hari',                 harga:10800,  coret:12500,  terlaris:false },
  { id:'pls-isat-25',  kat:'pulsa', op:'indosat',   nama:'Pulsa Indosat 25.000',     desc:'Masa aktif 14 hari',                harga:25800,  coret:28000,  terlaris:true  },
  { id:'pls-isat-50',  kat:'pulsa', op:'indosat',   nama:'Pulsa Indosat 50.000',     desc:'Masa aktif 30 hari',                harga:50800,  coret:54000,  terlaris:false },
  { id:'pls-xl-10',    kat:'pulsa', op:'xl',         nama:'Pulsa XL 10.000',          desc:'Masa aktif 7 hari',                 harga:10800,  coret:12500,  terlaris:false },
  { id:'pls-xl-25',    kat:'pulsa', op:'xl',         nama:'Pulsa XL 25.000',          desc:'Masa aktif 14 hari',                harga:25800,  coret:28000,  terlaris:false },
  { id:'pls-xl-50',    kat:'pulsa', op:'xl',         nama:'Pulsa XL 50.000',          desc:'Masa aktif 30 hari',                harga:50800,  coret:54000,  terlaris:false },
  { id:'pls-tri-5',    kat:'pulsa', op:'tri',        nama:'Pulsa Tri 5.000',          desc:'Masa aktif 3 hari',                 harga:5500,   coret:7000,   terlaris:false },
  { id:'pls-tri-10',   kat:'pulsa', op:'tri',        nama:'Pulsa Tri 10.000',         desc:'Masa aktif 7 hari',                 harga:10500,  coret:12000,  terlaris:false },
  { id:'pls-tri-25',   kat:'pulsa', op:'tri',        nama:'Pulsa Tri 25.000',         desc:'Masa aktif 14 hari',                harga:25500,  coret:27500,  terlaris:true  },
  { id:'pls-sf-10',    kat:'pulsa', op:'smartfren',  nama:'Pulsa Smartfren 10.000',   desc:'Masa aktif 7 hari',                 harga:10800,  coret:12500,  terlaris:false },
  { id:'pls-sf-20',    kat:'pulsa', op:'smartfren',  nama:'Pulsa Smartfren 20.000',   desc:'Masa aktif 14 hari',                harga:20800,  coret:23000,  terlaris:false },
  { id:'pls-axis-10',  kat:'pulsa', op:'axis',       nama:'Pulsa Axis 10.000',        desc:'Masa aktif 7 hari',                 harga:10500,  coret:12000,  terlaris:false },
  { id:'pls-axis-25',  kat:'pulsa', op:'axis',       nama:'Pulsa Axis 25.000',        desc:'Masa aktif 14 hari',                harga:25500,  coret:27500,  terlaris:false },

  // ─── PAKET DATA ───────────────────────
  { id:'dt-tsel-1g',   kat:'data',  op:'telkomsel', nama:'Data Telkomsel 1GB',       desc:'30 hari • Flash + Nite Surf',       harga:14500,  coret:18000,  terlaris:false },
  { id:'dt-tsel-3g',   kat:'data',  op:'telkomsel', nama:'Data Telkomsel 3GB',       desc:'30 hari • Flash + Nite Surf',       harga:35000,  coret:42000,  terlaris:false },
  { id:'dt-tsel-5g',   kat:'data',  op:'telkomsel', nama:'Data Telkomsel 5GB',       desc:'30 hari • Flash + Nite Surf',       harga:50000,  coret:60000,  terlaris:true  },
  { id:'dt-tsel-10g',  kat:'data',  op:'telkomsel', nama:'Data Telkomsel 10GB',      desc:'30 hari • Flash + Nite Surf',       harga:85000,  coret:100000, terlaris:true  },
  { id:'dt-tsel-20g',  kat:'data',  op:'telkomsel', nama:'Data Telkomsel 20GB',      desc:'30 hari • All Network',             harga:130000, coret:155000, terlaris:false },
  { id:'dt-tsel-50g',  kat:'data',  op:'telkomsel', nama:'Data Telkomsel 50GB',      desc:'30 hari • All Network',             harga:248000, coret:290000, terlaris:false },
  { id:'dt-isat-2g',   kat:'data',  op:'indosat',   nama:'Data Indosat 2GB',         desc:'30 hari • IM3 Freedom',             harga:17500,  coret:22000,  terlaris:false },
  { id:'dt-isat-6g',   kat:'data',  op:'indosat',   nama:'Data Indosat 6GB',         desc:'30 hari • IM3 Freedom',             harga:48000,  coret:58000,  terlaris:true  },
  { id:'dt-isat-15g',  kat:'data',  op:'indosat',   nama:'Data Indosat 15GB',        desc:'30 hari • IM3 Freedom',             harga:98000,  coret:120000, terlaris:false },
  { id:'dt-isat-30g',  kat:'data',  op:'indosat',   nama:'Data Indosat 30GB',        desc:'30 hari • IM3 Freedom',             harga:168000, coret:200000, terlaris:false },
  { id:'dt-xl-2g',     kat:'data',  op:'xl',         nama:'Data XL 2GB',             desc:'30 hari • XTRA ON',                 harga:16000,  coret:20000,  terlaris:false },
  { id:'dt-xl-8g',     kat:'data',  op:'xl',         nama:'Data XL 8GB',             desc:'30 hari • XTRA ON',                 harga:58000,  coret:72000,  terlaris:true  },
  { id:'dt-xl-25g',    kat:'data',  op:'xl',         nama:'Data XL 25GB',            desc:'30 hari • XTRA ON',                 harga:138000, coret:168000, terlaris:false },
  { id:'dt-tri-4g',    kat:'data',  op:'tri',        nama:'Data Tri 4GB',            desc:'30 hari • AlwaysOn',                harga:33000,  coret:42000,  terlaris:false },
  { id:'dt-tri-12g',   kat:'data',  op:'tri',        nama:'Data Tri 12GB',           desc:'30 hari • AlwaysOn',                harga:78000,  coret:95000,  terlaris:true  },
  { id:'dt-tri-24g',   kat:'data',  op:'tri',        nama:'Data Tri 24GB',           desc:'30 hari • AlwaysOn',                harga:138000, coret:165000, terlaris:false },
  { id:'dt-sf-5g',     kat:'data',  op:'smartfren',  nama:'Data Smartfren 5GB',      desc:'30 hari • 4G LTE',                  harga:38000,  coret:48000,  terlaris:false },
  { id:'dt-sf-15g',    kat:'data',  op:'smartfren',  nama:'Data Smartfren 15GB',     desc:'30 hari • 4G LTE',                  harga:88000,  coret:110000, terlaris:false },
  { id:'dt-axis-2g',   kat:'data',  op:'axis',       nama:'Data Axis Bronet 2GB',    desc:'30 hari • 4G+WiFi',                 harga:15000,  coret:19000,  terlaris:false },
  { id:'dt-axis-10g',  kat:'data',  op:'axis',       nama:'Data Axis Bronet 10GB',   desc:'30 hari • 4G+WiFi',                 harga:60000,  coret:75000,  terlaris:false },

  // ─── TELEPON & SMS ───────────────────
  { id:'tlp-tsel-u',   kat:'telepon', op:'telkomsel', nama:'Nelpon Unlimited Telkomsel', desc:'30 hari • Semua Operator',      harga:65000,  coret:80000,  terlaris:true  },
  { id:'tlp-tsel-100', kat:'telepon', op:'telkomsel', nama:'Nelpon Telkomsel 100 Mnt',   desc:'30 hari • Sesama Telkomsel',    harga:22000,  coret:28000,  terlaris:false },
  { id:'tlp-isat-u',   kat:'telepon', op:'indosat',   nama:'Nelpon Unlimited Indosat',   desc:'30 hari • Sesama Indosat',      harga:45000,  coret:58000,  terlaris:true  },
  { id:'tlp-isat-200', kat:'telepon', op:'indosat',   nama:'Nelpon Indosat 200 Mnt',     desc:'30 hari • Semua Operator',      harga:42000,  coret:55000,  terlaris:false },
  { id:'tlp-xl-100',   kat:'telepon', op:'xl',         nama:'Nelpon XL 100 Menit',       desc:'30 hari • Semua Operator',      harga:19500,  coret:26000,  terlaris:false },
  { id:'tlp-tri-60',   kat:'telepon', op:'tri',        nama:'Nelpon Tri 60 Menit',       desc:'30 hari • Semua Operator',      harga:12000,  coret:17000,  terlaris:false },
  { id:'sms-tri-100',  kat:'telepon', op:'tri',        nama:'SMS Tri 100 SMS',           desc:'30 hari • Semua Operator',      harga:4800,   coret:8000,   terlaris:false },
  { id:'sms-sf-100',   kat:'telepon', op:'smartfren',  nama:'SMS Smartfren Unlimited',   desc:'30 hari • Sesama Smartfren',    harga:3500,   coret:6000,   terlaris:false },

  // ─── TOKEN LISTRIK ───────────────────
  { id:'pln-20',   kat:'listrik', op:'pln', nama:'Token PLN Rp 20.000',    desc:'Langsung masuk ke meter',   harga:21500,  coret:null, terlaris:false },
  { id:'pln-50',   kat:'listrik', op:'pln', nama:'Token PLN Rp 50.000',    desc:'Langsung masuk ke meter',   harga:51500,  coret:null, terlaris:true  },
  { id:'pln-100',  kat:'listrik', op:'pln', nama:'Token PLN Rp 100.000',   desc:'Langsung masuk ke meter',   harga:101500, coret:null, terlaris:true  },
  { id:'pln-200',  kat:'listrik', op:'pln', nama:'Token PLN Rp 200.000',   desc:'Langsung masuk ke meter',   harga:201500, coret:null, terlaris:false },
  { id:'pln-500',  kat:'listrik', op:'pln', nama:'Token PLN Rp 500.000',   desc:'Langsung masuk ke meter',   harga:501500, coret:null, terlaris:false },

  // ─── E-WALLET TOPUP ──────────────────
  { id:'ew-gp-25',   kat:'ewallet', op:'gopay',   nama:'GoPay Rp 25.000',   desc:'Saldo GoPay instan',   harga:26000,  coret:null, terlaris:false },
  { id:'ew-gp-50',   kat:'ewallet', op:'gopay',   nama:'GoPay Rp 50.000',   desc:'Saldo GoPay instan',   harga:51500,  coret:null, terlaris:true  },
  { id:'ew-gp-100',  kat:'ewallet', op:'gopay',   nama:'GoPay Rp 100.000',  desc:'Saldo GoPay instan',   harga:101500, coret:null, terlaris:false },
  { id:'ew-ov-50',   kat:'ewallet', op:'ovo',     nama:'OVO Rp 50.000',     desc:'Saldo OVO instan',     harga:51500,  coret:null, terlaris:true  },
  { id:'ew-ov-100',  kat:'ewallet', op:'ovo',     nama:'OVO Rp 100.000',    desc:'Saldo OVO instan',     harga:101500, coret:null, terlaris:false },
  { id:'ew-dn-50',   kat:'ewallet', op:'dana',    nama:'DANA Rp 50.000',    desc:'Saldo DANA instan',    harga:51500,  coret:null, terlaris:false },
  { id:'ew-dn-100',  kat:'ewallet', op:'dana',    nama:'DANA Rp 100.000',   desc:'Saldo DANA instan',    harga:101500, coret:null, terlaris:false },
  { id:'ew-sp-50',   kat:'ewallet', op:'shopeepay',nama:'ShopeePay Rp 50.000',desc:'Saldo ShopeePay instan',harga:51500,coret:null, terlaris:false },
];

// ═══════════════════════════════════════
//  FAQ
// ═══════════════════════════════════════
const FAQ = [
  { q:'Berapa lama proses transaksi?', a:'Transaksi diproses otomatis dalam hitungan detik setelah pembayaran dikonfirmasi. Konfirmasi pembayaran biasanya 1–5 menit pada jam aktif.' },
  { q:'Metode pembayaran apa yang tersedia?', a:'Kami menerima transfer DANA dan SeaBank. Nomor akan tampil setelah Anda memilih metode pembayaran di form pembelian.' },
  { q:'Bagaimana jika transaksi gagal setelah bayar?', a:'Hubungi CS WhatsApp kami dengan menyertakan ID pesanan dan bukti pembayaran. Dana akan direfund atau diproses ulang.' },
  { q:'Apakah ada minimal pembelian?', a:'Tidak ada minimal pembelian. Anda bisa beli produk mulai dari nominal terkecil sesuai kebutuhan.' },
  { q:'Bagaimana cara cek status pesanan?', a:'Buka halaman Cek Status, masukkan ID pesanan yang diterima setelah pembelian, atau nomor HP tujuan transaksi.' },
  { q:'Apakah aman bertransaksi di Fantasy Store?', a:'Ya, semua transaksi diproses dengan aman. Data pembayaran tidak disimpan di server kami. Kami beroperasi sejak 2020.' },
  { q:'Operator apa saja yang didukung?', a:'Telkomsel, Indosat Ooredoo, XL Axiata, Tri, Smartfren, Axis, PLN, GoPay, OVO, DANA, dan ShopeePay.' },
  { q:'Bisa beli untuk nomor orang lain?', a:'Tentu bisa! Cukup masukkan nomor HP tujuan yang ingin diisi pada form pembelian. Tidak harus nomor Anda sendiri.' },
];

// ═══════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════
const ORDERS_KEY = 'fantasystore_orders';

function getOrders() {
  try { return JSON.parse(sessionStorage.getItem(ORDERS_KEY) || '[]'); }
  catch { return []; }
}

function saveOrder(o) {
  const arr = getOrders();
  arr.unshift(o);
  sessionStorage.setItem(ORDERS_KEY, JSON.stringify(arr));
}

function generateOID() {
  const d = new Date();
  const p = n => String(n).padStart(2,'0');
  return `FS-${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${String(Math.floor(Math.random()*9000)+1000)}`;
}

function fmtRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function hemat(h, c) {
  if (!c) return null;
  return Math.round((1 - h/c) * 100) + '% lebih hemat';
}

function showToast(msg, icon = '✓', duration = 3000) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), duration);
}
