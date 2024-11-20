import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  // If there's no user, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default ProtectedRoute;
