import React, { useState } from "react";
import bg from "../Assets/background.jpg";
import email from "../Assets/user.png";
import pass from "../Assets/password.png";
import logicon from "../Assets/logIcon.png";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Login successful");
      // Handle successful login here (e.g., redirect to another page)
    } else {
      alert("Login failed: " + data.message);
      // Handle login failure here
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <p>
            Temukan
            <br />
            <span>HOAX</span>
          </p>
        </div>
      </div>
      <div className="body">
        <div className="container-body">
          <div className="Login">
            <form onSubmit={handleLogin}>
              {" "}
              {/* Tambahkan ini */}
              <div className="title-Login">
                <p>LogIn</p>
                <img src={logicon} alt="" />
              </div>
              <div className="input-email">
                <img src={email} alt="" />
                <input
                  type="text"
                  id="email"
                  placeholder="Username"
                  value={username} // Bind input ke state username
                  onChange={(e) => setUsername(e.target.value)} // Update state saat input berubah
                />
              </div>
              <div className="input-password">
                <img src={pass} alt="" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password} // Bind input ke state password
                  onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
                />
              </div>
              <div className="btn-signIn">
                <button type="submit" id="submit">
                  Sign In
                </button>
              </div>
            </form>{" "}
            {/* Jangan lupa tutup form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
