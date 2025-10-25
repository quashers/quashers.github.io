// assets/js/index.js

// 1) Current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// 2) FAQ accordion
document.addEventListener('click', (e) => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  const item = q.parentElement;
  const answer = item.querySelector('.faq-a');
  const open = answer.style.maxHeight && answer.style.maxHeight !== '0px';

  // close others for cleaner UI (optional)
  document.querySelectorAll('.faq-a').forEach(a => {
    a.style.maxHeight = '0px';
  });

  // toggle current
  answer.style.maxHeight = open ? '0px' : answer.scrollHeight + 'px';
});

// 3) Stripe Payment Link (static-friendly)
// Replace this with your actual Payment Link URL from Stripe Dashboard.
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/your_payment_link_here";

document.querySelectorAll('[data-buy]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!STRIPE_PAYMENT_LINK || STRIPE_PAYMENT_LINK.includes('your_payment_link_here')) {
      alert('Stripe payment link not set yet. Replace STRIPE_PAYMENT_LINK in index.js.');
      return;
    }
    window.open(STRIPE_PAYMENT_LINK, '_blank', 'noopener');
  });
});
