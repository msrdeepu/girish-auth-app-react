// LoginForm.js
import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple validation for demonstration purposes
    if (userId === "user123" && password === "password123") {
      onLogin();
    } else {
      setError("Invalid user ID or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default LoginForm;
