import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Locations from "./components/Locations";
import Deals from "./components/Deals";
import AboutCoffee from "./components/AboutCoffee";
import Order from "./components/Order";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import MyAccount from "./components/MyAccount";
import KnowMore from "./components/KnowMore";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/styles.css";

function App() {
  // State for tracking the logged-in user
  const [user, setUser] = useState(null);

  return (
    <Router>
      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about-coffee" element={<AboutCoffee />} />
        <Route path="/know-more" element={<KnowMore />} />

        {/* Protected Routes */}
        <Route
          path="/order"
          element={
            <ProtectedRoute user={user}>
              <Order user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute user={user}>
              <Cart user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute user={user}>
              <Payment user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-account"
          element={
            <ProtectedRoute user={user}>
              <MyAccount user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Chatbot */}
      <Chatbot />
    </Router>
  );
}

export default App;
