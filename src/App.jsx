// App.js
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <HomePage />}
    </div>
  );
}

export default App;
