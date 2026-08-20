import { useAuth } from "./auth/AuthContext";
import { Navigate } from "react-router";

export function RootRedirect() {
  const {user} = useAuth();

  return <Navigate to={user ? "/dashboard" : "/login"}/>
}