// Set current year in footer
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Stripe Checkout
const stripe = Stripe('pk_test_YOUR_STRIPE_PUBLIC_KEY'); // Replace with your public key
const checkoutButton = document.getElementById('stripe-checkout');

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    // Replace with your actual product ID and success/cancel URLs
    stripe.redirectToCheckout({
      lineItems: [{ price: 'YOUR_STRIPE_PRICE_ID', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/cancel',
    })
    .then((result) => {
      if (result.error) {
        alert(result.error.message);
      }
    });
  });
}
