// components/SetPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New password set:", password);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Set Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
