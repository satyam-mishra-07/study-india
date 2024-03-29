import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, [logout]);
  return <Navigate to="/" />;
}