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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8081/api/members/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 200) { //login success!
    

      localStorage.setItem("user", JSON.stringify(data.member));

      //for admin only
      if (email === "coachkit@thefitkit.com") {
        localStorage.setItem("isAdmin", "true");
        navigate("/adminpage");
      } else {
        localStorage.setItem("isAdmin", "false");
        navigate("/userpage");
      }

      //close modal if success
      onClose();

    } else {
      // login failed
      setError(data.message || "Wrong email or password");
    }

  } catch (err) {
    console.error(err);
    setError("Member does not exist");
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
            onClick={onClose}
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