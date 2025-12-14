import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault(); // 🔴 THIS FIXES THE BUTTON

    try {
      const res = await api.post("/auth/login", {
        email: email,
        password: password
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      console.log(res);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
