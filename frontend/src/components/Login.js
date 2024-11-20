import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook to redirect users

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", formData);
  
      console.log("Full API Response:", response.data);
  
      localStorage.setItem("token", response.data.token); // Save the token
      setUser(response.data.user); // Set the user
      navigate("/my-account"); // Redirect to account page
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Login failed. Please try again.");
    }
  };
  
  

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
};

export default Login;
