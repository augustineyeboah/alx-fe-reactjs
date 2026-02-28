import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile (Protected)</Link>
          </li>
          <li>
            <Link to="/profile/details">Profile Details</Link>
          </li>
          <li>
            <Link to="/profile/settings">Profile Settings</Link>
          </li>
          <li>
            <Link to="/blog/1">View Blog Post 1</Link>
          </li>
          <li>
            <Link to="/blog/42">View Blog Post 42</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;