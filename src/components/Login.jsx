// Login.jsx

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in the admin using Firebase Authentication
      await signInWithEmailAndPassword(app.auth(), email, password);

      // If login is successful, redirect the user to the admin panel
      // You can use React Router's history object to navigate to the admin panel page.
      // For example, history.push('/admin') if '/admin' is your admin panel page.
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Handle login error, display an error message, etc.
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
