import React from "react";
import Box from "@mui/material/Box";
import SignupForm from "../../components/signupForm/signupForm";

function SignupPage() {
    return (
        <Box className= "signup-page-container"  display= "flex" justifyContent="center"  alignContent="center" alignItems= "center" backgroundColor= "var(--third-color)">
            <SignupForm></SignupForm>
        </Box>
    );
}

export default SignupPage;