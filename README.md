# ✦ Fantasy Store — Website PPOB

**Platform PPOB modern** untuk jual beli pulsa, paket data, token listrik, dan top-up e-wallet.

![Fantasy Store](https://img.shields.io/badge/Fantasy%20Store-PPOB-7c3aed?style=for-the-badge)
![GitHub Pages Ready](https://img.shields.io/badge/GitHub%20Pages-Ready-06b6d4?style=for-the-badge)

---

## 🚀 Demo

Upload ke GitHub Pages dan akses di: `https://username.github.io/fantasy-store`

---

## 📁 Struktur File

```
fantasy-store/
├── index.html          # Halaman beranda
├── produk.html         # Katalog produk & pembelian
├── cek-status.html     # Cek status transaksi
├── kontak.html         # Kontak & FAQ
├── css/
│   └── style.css       # Semua styling (glassmorphism + neon)
├── js/
│   ├── data.js         # Data produk, config toko, utilitas
│   ├── main.js         # Script beranda
│   ├── produk.js       # Script halaman produk
│   ├── cek-status.js   # Script cek status
│   └── kontak.js       # Script kontak
└── README.md
```

---

## ⚡ Fitur Utama

- **5 Kategori Produk**: Pulsa, Paket Data, Token Listrik PLN, E-Wallet, Telepon & SMS
- **55+ Produk** dari semua operator
- **Filter & Pencarian** real-time
- **Form Pembelian** dengan validasi & ID pesanan unik
- **Nomor Rekening Tersembunyi** — tampil hanya saat dipilih (fitur keamanan)
- **Cek Status Transaksi** berdasarkan ID atau nomor HP
- **FAQ Accordion** interaktif
- **Responsif** — mobile-friendly sempurna
- **Design Modern** — glassmorphism + neon gradient

---

## 📤 Upload ke GitHub Pages

### Langkah 1 — Buat Repository

```bash
git init
git add .
git commit -m "✦ Initial commit - Fantasy Store PPOB"
git branch -M main
git remote add origin https://github.com/USERNAME/fantasy-store.git
git push -u origin main
```

### Langkah 2 — Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab **Settings**
3. Di sidebar kiri, klik **Pages**
4. Di bawah "Source", pilih **Deploy from a branch**
5. Pilih branch **main**, folder **/ (root)**
6. Klik **Save**
7. Tunggu 1–2 menit, website sudah live! 🎉

---

## ✏️ Kustomisasi

### Ubah Info Toko (`js/data.js`)

```javascript
const STORE = {
  name:    'Fantasy Store',          // Nama toko
  wa:      '085783385872',           // Nomor WhatsApp
  email:   'aswdwi@gmail.com',       // Email
};
```

### Ubah Nomor Pembayaran (`js/data.js`)

```javascript
const PAYMENT_METHODS = [
  {
    id:    'dana',
    name:  'DANA',
    icon:  '💙',
    num:   '087788486916',           // Nomor DANA
    atas:  'Fantasy Store',
  },
  {
    id:    'seabank',
    name:  'SeaBank',
    icon:  '🌊',
    num:   '901976839823',           // Nomor SeaBank
    atas:  'Fantasy Store',
  },
];
```

> 🔒 **Fitur Keamanan**: Nomor rekening tidak langsung ditampilkan ke publik. Nomor akan tampil **hanya ketika pembeli memilih metode pembayaran** di form pembelian.

### Ubah Harga Produk (`js/data.js`)

```javascript
{ id:'dt-tsel-5g', kat:'data', op:'telkomsel',
  nama:'Data Telkomsel 5GB',
  desc:'30 hari • Flash + Nite Surf',
  harga: 50000,     // ← Harga jual
  coret: 60000,     // ← Harga coret (null jika tidak ada)
  terlaris: true    // ← Tampil di beranda jika true
}
```

### Tambah Produk Baru

```javascript
{
  id:       'id-unik',          // Harus unik
  kat:      'pulsa',            // pulsa | data | listrik | ewallet | telepon
  op:       'telkomsel',        // Nama operator (huruf kecil)
  nama:     'Nama Produk',
  desc:     'Deskripsi singkat',
  harga:    50000,              // Harga jual (angka)
  coret:    60000,              // Harga normal (null = tidak tampil coret)
  terlaris: false               // true = tampil di beranda
}
```

### Ubah Warna Tema (`css/style.css`)

```css
:root {
  --violet:    #7c3aed;   /* Warna utama */
  --cyan:      #06b6d4;   /* Warna aksen */
  --bg-base:   #060610;   /* Background gelap */
}
```

---

## 💳 Alur Transaksi

```
Pilih Produk → Isi Nomor HP → Pilih Pembayaran → Lihat Nomor Rek
→ Transfer → Konfirmasi ke CS WhatsApp → Produk Masuk ✓
```

> ⚠️ **Catatan**: Website ini adalah **frontend statis**. Data pesanan tersimpan di `sessionStorage` browser (hanya satu sesi). Untuk sistem produksi, Anda memerlukan backend + database + payment gateway.

---

## 🛠️ Pengembangan Lanjutan

Untuk fitur produksi penuh:
- **Backend**: Node.js + Express / Laravel / Django
- **Database**: MySQL / PostgreSQL / MongoDB
- **Payment Gateway**: Midtrans / Xendit / Duitku
- **API Operator**: Digiflazz / VocaLink / iReap

---

## 📄 Lisensi

MIT License — Bebas digunakan dan dimodifikasi.

---

Dibuat dengan ❤️ untuk **Fantasy Store** | © 2025
