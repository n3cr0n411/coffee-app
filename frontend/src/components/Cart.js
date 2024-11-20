import React, { useEffect, useState } from "react";
import API from "../api/axios";

const Cart = ({ user }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      API.get(`/cart/${user._id}`)
        .then((response) => setCartItems(response.data.items))
        .catch((err) => console.error("Error fetching cart:", err));
    }
  }, [user]);

  if (!user) return <p>Please log in to view your cart.</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.productId}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
