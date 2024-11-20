import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the JWT token from localStorage
    setUser(null); // Clear the user state
  };

  return (
    <div className="navbar">
      <div className="logo">Online Café</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/about-coffee">All About Coffee</Link>
        {user ? ( // If user is logged in
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/my-account">My Account</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : ( // If user is not logged in
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
