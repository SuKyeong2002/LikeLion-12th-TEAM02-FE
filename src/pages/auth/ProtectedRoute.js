import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext);

  if (!accessToken) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
