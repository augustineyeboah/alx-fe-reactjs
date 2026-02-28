import { useState } from "react";

export default function useAuth() {
  // simulate login state
  const [isAuthenticated] = useState(false); // change false → true to test

  return { isAuthenticated };
}