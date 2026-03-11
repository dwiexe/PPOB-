// ═══════════════════════════════
//  KONTAK.JS
// ═══════════════════════════════

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// ── FAQ ──
function renderFAQ() {
  const el = document.getElementById('faqList');
  if (!el) return;
  el.innerHTML = FAQ.map((item, i) => `
    <div class="faq-item">
      <div class="faq-q" id="fq${i}" onclick="toggleFaq(${i})">
        <span>${item.q}</span>
        <span class="faq-chevron" id="fc${i}">▼</span>
      </div>
      <div class="faq-a" id="fa${i}">
        <div class="faq-a-inner">${item.a}</div>
      </div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const q = document.getElementById('fq' + i);
  const a = document.getElementById('fa' + i);
  const isOpen = a.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-q').forEach(e => e.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(e => e.classList.remove('open'));
  if (!isOpen) { q.classList.add('open'); a.classList.add('open'); }
}

// ── Form kontak ──
document.getElementById('formKontak')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formKontak').style.display = 'none';
    document.getElementById('formSukses').style.display = 'block';
  }, 800);
});

renderFAQ();
