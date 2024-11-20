const express = require('express');
const Stripe = require('stripe');
const paypal = require('@paypal/checkout-server-sdk');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Configure PayPal environment
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const paypalClient = new paypal.core.PayPalHttpClient(environment);

const router = express.Router();

// Stripe Payment
router.post('/stripe', async (req, res) => {
  const { amount, currency, paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.status(200).json({ message: 'Payment successful', paymentIntent });
  } catch (err) {
    res.status(500).json({ message: 'Stripe payment failed', error: err.message });
  }
});

// PayPal Payment
router.post('/paypal', async (req, res) => {
  const { amount, currency } = req.body;

  // Create a new PayPal order
  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: 'CAPTURE', // Intent to capture payment immediately
    purchase_units: [
      {
        amount: {
          currency_code: currency, // Currency code, e.g., 'USD'
          value: amount, // Total amount
        },
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request); // Execute the request
    res.status(200).json({ message: 'PayPal payment successful', order });
  } catch (err) {
    res.status(500).json({ message: 'PayPal payment failed', error: err.message });
  }
});

module.exports = router;
