import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import "./loginBox.css"
import GreenButton from "../buttons/greenButton/greenButton";


function LoginBox () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    navigate("/userpage");
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
