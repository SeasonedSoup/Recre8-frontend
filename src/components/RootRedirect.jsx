import { useAuth } from "./auth/AuthContext";
import { Navigate } from "react-router";

export function RootRedirect() {
  const {user, loading} = useAuth();
  
  if (loading) {
    return <div>Loading your session...</div>; // Or return null; for a blank screen
  }
  
  return <Navigate to={user ? "/dashboard" : "/login"}/>
}