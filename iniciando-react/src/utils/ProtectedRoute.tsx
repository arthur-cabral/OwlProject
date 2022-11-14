import React from "react";
import { Navigate, Route } from "react-router-dom";
import { Profile } from "../pages/Profile";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("autenticado");
  console.log("this", isAuthenticated);

  return (
    isAuthenticated === "true" ? <Profile /> : <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
