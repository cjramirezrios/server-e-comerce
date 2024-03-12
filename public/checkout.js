// This is your test publishable API key.
const stripe = Stripe("pk_test_51OtIg9Dna29Am73Vh7pj0aaCUvffVZaGA95g3PpeP7cLFofEbqGfwkmxmiRPfbvUkx2uLPns5yxXiu2T1VUbs6CO00xxP7a52B");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
  });

  const { clientSecret } = await response.json();

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}