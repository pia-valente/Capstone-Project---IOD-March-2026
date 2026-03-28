import React from "react";
import Box from "@mui/material/Box";
import SignupForm from "../../components/signupForm/signupForm";
import "./signup.css"

function SignupPage() {
    return (
        <Box className="signup-page-container" display="flex" flexDirection="column">
            <Box className= "signup-form-container"  display= "flex" justifyContent="center"  alignContent="center" alignItems= "center" >
                <SignupForm onNewMember = {(member) => {
                    console.log("New member added")
                }}></SignupForm>
            </Box>
        </Box>
       
    );
}

export default SignupPage;