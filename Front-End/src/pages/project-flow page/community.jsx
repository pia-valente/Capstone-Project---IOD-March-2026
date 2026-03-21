import React from "react";
import "./community.css";
import { Box } from "@mui/material";
import LoginBox from "../../components/loginBox/loginBox";


function Community() {
  return (
    <>
      <Box id="community" className='community-container' display="flex" flexDirection="row">
        
        <Box className= "left-community-container" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <h2>
            Project Flow <br></br>
            <h3><em>Train Different. Move powerful.</em></h3>
          </h2>
          <p>dsnvjkdsnvjksdnbvkjsdbfvkjbvnsn</p>
        </Box>

        <Box className= "right-community-container" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
         <LoginBox></LoginBox>
        </Box>
       

      </Box>
    </>
  );
};

export default Community;
