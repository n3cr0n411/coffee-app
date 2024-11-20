import React, { useState } from "react";
import API from "../api/axios";

const SignUp = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/signup", formData);
      localStorage.setItem("token", response.data.token); // Save the token
      setUser(response.data.user); // Set the logged-in user in App.js
      setMessage("Signup successful!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
      <p>{message}</p>
    </form>
  );
};

export default SignUp;
