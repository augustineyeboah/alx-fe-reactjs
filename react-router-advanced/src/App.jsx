import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./components/Profile";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile/*" // <-- important: include * so nested routes in Profile work
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Blog Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;