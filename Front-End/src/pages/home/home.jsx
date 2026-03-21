import React from "react";
import "./home.css";
import NavBar from "../../components/navbar/navbar";
import Box from "@mui/material/Box";
import GreenButton from "../../components/buttons/greenButton/greenButton";
import { Element } from "react-scroll";
import About from "../about page/about";
import Programs from "../programs page/programs"
import Contact from "../contact page/contact";
import Community from "../project-flow page/community"; //Project-flow



function Home() {
  return (
    <>
      <Element name = "home-page">
        <Box className="home-container" display="flex" flexDirection= "row" gap={0}>
          <Box className="strength-and-flow-container" display="flex" flexDirection="column" gap={0}>
            <h1 className="home-title">
              Strength<br></br>
              and<br></br>
              Flow<br></br>
            </h1>
            <h3 className="secondary-title">Move Strong. Flow Free.</h3>
            <GreenButton>TRY FOR 7 DAYS</GreenButton>
          </Box>
      
          <Box className="home-photo-container" display="flex" flexDirection= "column">
            <img 
            src = "./src/assets/CoachKit.jpg" 
            alt="Coach Kit" 
            style={{
              width: "700px", 
              height: "700px", 
              borderRadius: "50%", 
              objectFit: "cover", 
              border: "18px solid var(--primary-color)",
              marginLeft: "-120px"}}>
            </img>
          </Box>
        </Box>
      </Element>

      <Element name = "about-page">
        <About></About>
      </Element>

      <Element name = "programs-page">
        <Programs></Programs>
      </Element>

      <Element name = "contact-page">
        <Contact></Contact>
      </Element>

      <Element name = "community-page">
        <Community></Community>
      </Element>
      

      
      
    </>
  );
}

export default Home;
