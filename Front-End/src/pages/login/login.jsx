import React from "react";
import "./login.css";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material"
import LoginBox from "../../components/loginBox/loginBox";

function Login() {
  return (
      <Box id="login" className='login-container'>
        <h1>Login Page</h1>
      </Box>
  );
};

export default Login;
