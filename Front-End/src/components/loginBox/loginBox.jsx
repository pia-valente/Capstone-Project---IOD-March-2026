import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"
import "./loginBox.css"
import GreenButton from "../buttons/greenButton/greenButton";
import SignupForm from "../signupForm/signupForm";

function LoginBox () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (

    <Box className= "loginbox-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <TextField id="email" label="Email" variant="filled" sx={{width:400}} value ={email} onChange ={(e) => setEmail(e.target.value)}></TextField><br></br>
            <TextField id="password" label="Password" variant="filled" sx={{width:400}} type= "password" value ={password} onChange ={(e) => setPassword(e.target.value)}></TextField>
            <p>Not yet part of the community? <Link to= "/signup" style={{fontStyle: "italic", color: "var(--text-color)"}}>Sign up here.</Link></p>
            <GreenButton fontSize= "20px" padding="6px 12px" minWidth="120px">Login</GreenButton>
        </form>
    </Box>
  );
};

export default LoginBox;
