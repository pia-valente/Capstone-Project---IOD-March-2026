import React from "react";
import "./home.css";
import { useTheme } from "@mui/material/styles";
import NavBar from "../../navbar/navbar";
import Box from "@mui/material/Box";

function Home() {
  return (
    <>
    <Box className= "home-container">
      <Box className= "strength-and-flow">
        <h1 className = "home-title">
          Strength<br></br>
          and<br></br>
          Flow
        </h1>
      </Box>
    </Box>
      
    </>
  );
};

export default Home;
