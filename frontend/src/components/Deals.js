import React from "react";

function Deals() {
  const deals = [
    // Credit Card Deals
    {
      code: "CRD123",
      description: "20% off on orders above ₹1200 when you pay using a credit card.",
      validity: "Valid until: 2024-12-31",
    },
    {
      code: "CRD456",
      description: "Flat ₹400 cashback on your first credit card payment.",
      validity: "Valid until: 2024-11-30",
    },
    // Debit Card Deals
    {
      code: "DBT789",
      description: "15% off on orders above ₹1500 for debit card users.",
      validity: "Valid until: 2024-12-15",
    },
    {
      code: "DBT321",
      description: "Earn ₹250 cashback on every debit card transaction above ₹2000.",
      validity: "Valid until: 2025-01-10",
    },
    // GPay Deals
    {
      code: "GPAY88",
      description: "Get 10% off when you pay using GPay on weekends.",
      validity: "Valid until: 2024-12-20",
    },
    {
      code: "GPAY99",
      description: "Flat ₹150 cashback on orders over ₹800 via GPay.",
      validity: "Valid until: 2024-11-25",
    },
    // Cash Deals
    {
      code: "CASH11",
      description: "Pay with cash and get a free pastry on orders above ₹1000.",
      validity: "Valid until: 2024-12-05",
    },
    {
      code: "CASH22",
      description: "5% discount for all cash payments over ₹2500.",
      validity: "Valid until: 2024-11-15",
    },
    // PhonePe Deals
    {
      code: "PHN101",
      description: "Flat ₹250 off on all orders above ₹1000 paid via PhonePe.",
      validity: "Valid until: 2024-12-25",
    },
    {
      code: "PHN202",
      description: "10% off up to ₹400 on orders paid with PhonePe.",
      validity: "Valid until: 2024-11-20",
    },
  ];

  return (
    <div className="deals">
      <h1>Exclusive Deals</h1>
      <ul>
        {deals.map((deal, index) => (
          <li key={index}>
            <h3>{deal.code}</h3>
            <p>{deal.description}</p>
            <p>{deal.validity}</p>
            <button>Apply Code</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deals;
