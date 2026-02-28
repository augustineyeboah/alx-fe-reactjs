import Profile from "./components/Profile";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Links to nested routes */}
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested pages render here */}
      <Outlet />
    </div>
  );
}

export default Profile;