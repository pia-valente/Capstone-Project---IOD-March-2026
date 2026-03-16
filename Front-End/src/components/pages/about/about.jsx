import React from "react";
import "./about.css";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

function About(){
  return (
    <>
      <Box id ="about" className="about-container" display="flex" flexDirection= "column" gap={0}>
        <Box className="about-text-container" display="flex" flexDirection="row" justifyContent= "center" gap={0}>
          <Typography variant = "body1" align = "center" fontSize={18}>
            My name is Kit. I’m a former preschool teacher turned fitness coach.<br></br>
            I’m originally from the Philippines but now residing in New Zealand.<br></br>
            I’m not the most jacked coach you’ll see at the gym (never wanted to be). <br></br>
            People view me as the “weird” coach or the “unique” one. Either way, I’m cool with that. I’m one of one.<br></br>
            It’s my intention to impart to you the knowledge I’ve learned throughout the years of my fitness journey so you can get stronger, <br></br>
            healthier, more empowered/confident and maybe find your own “weird/unique” self more.
          </Typography>
        </Box>

        <Box className="about-photo-container" display="flex" flexDirection= "column" justifyContent="center" alignItems="center" gap ={0}>
          <img 
          src = "./src/assets/AboutMe.png" 
          alt="Coach Kit" 
          style={{
            width: "80vw", 
            height: "auto", 
            borderRadius: "0%", 
            objectFit: "cover", 
            marginTop: "30px"
            }}>
          </img>
              
        </Box>




      </Box>
    </>
  );
};

export default About;
