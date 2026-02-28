import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = false; // change to true to test access

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    // redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;