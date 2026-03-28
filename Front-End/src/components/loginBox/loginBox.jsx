import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./loginBox.css";
import GreenButton from "../buttons/greenButton/greenButton";

function LoginBox({ loginBoxIsOpen, onClose }) { // Assuming onClose is passed as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    if (email === "coachkit@thefitkit.com" && password === "abcd1234") {
      localStorage.setItem("isAdmin", "true");
      onClose(); // Close the modal when login is successful
      navigate("/adminpage");
    } else if (email && password) {
      localStorage.setItem("isAdmin", "false");
      onClose(); // Close the modal when login is successful
      navigate("/userpage");
    } else {
      setError("Wrong email or password");
    }
  };

  return (
    <Box className="loginbox-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          sx={{ width: 400 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          sx={{ width: 400 }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <p>
          Not yet part of the community?{" "}
          <Link
            to="/signup"
            style={{ fontStyle: "italic", color: "var(--text-color)" }}
          >
            Sign up here.
          </Link>
        </p>
        <GreenButton
          type="submit"
          fontSize="20px"
          padding="6px 12px"
          minWidth="120px"
        >
          Login
        </GreenButton>
      </form>
    </Box>
  );
}

export default LoginBox;