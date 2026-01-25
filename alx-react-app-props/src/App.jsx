import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;