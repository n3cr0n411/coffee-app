import React, { useState } from "react";
import API from "../api/axios";

const Payment = ({ user }) => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleStripePayment = async () => {
    try {
      const response = await API.post("/payment/stripe", {
        amount: amount * 100, // Convert to cents
        currency: "usd",
        paymentMethodId: "pm_card_visa", // Replace with a valid payment method ID
      });
      setMessage("Stripe payment successful!");
    } catch (err) {
      setMessage("Stripe payment failed. Please try again.");
    }
  };

  const handlePayPalPayment = async () => {
    try {
      const response = await API.post("/payment/paypal", {
        amount,
        currency: "USD",
      });
      setMessage("PayPal payment successful!");
    } catch (err) {
      setMessage("PayPal payment failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleStripePayment}>Pay with Stripe</button>
      <button onClick={handlePayPalPayment}>Pay with PayPal</button>
      <p>{message}</p>
    </div>
  );
};

export default Payment;
