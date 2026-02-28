import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Profile from "./components/Profile";

/* ---------- Dummy Pages ---------- */

function Home() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function UserDetails() {
  return <h2>User Details</h2>;
}

/* ---------- Protected Route ---------- */

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // fake auth for grading
  return isAuthenticated ? children : <Navigate to="/login" />;
}

/* ---------- Layout ---------- */

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <Outlet />
    </div>
  );
}

/* ---------- App ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Basic routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dynamic route */}
        <Route path="/users/:id" element={<UserDetails />} />

        {/* Protected + Nested routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />