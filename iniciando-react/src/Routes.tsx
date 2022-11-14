import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";

export function AppRoutes() {
  const isAuthenticated = localStorage.getItem("autenticado");
  console.log(isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  );
}