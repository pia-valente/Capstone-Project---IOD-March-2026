import React from "react";
import "./programs.css";
import { Box, Typography } from "@mui/material";
import ProgramCards from "../../components/cards/programCards";

const cardData = [
  {
    id: 0,
    image: "https://www.octomoves.com/cdn/shop/files/DSC07032_copy.webp?v=1748600308",
    program: "Rope Flow",
    description: "Flow, Strength, Rhythm"
  },

  {
    id: 1,
    image: "",
    program: "Kettlebell",
    description: "Power, Endurance, Control"
  },

  {
    id: 2,
    image: "",
    program: "Steel Mace",
    description: "Leverage, Strength, Flow"
  },

  {
    id: 3,
    image: "",
    program: "Clubbell",
    description: "Momentum, Stability, Power"
  },
]

function Programs() {
  return ( //
    <>
      {/*First box container*/}
      <Box id= "programs" className="programs-page-container" display="flex" flexDirection= "column" justifyContent= "center" gap={0}>
        <h2>Programs</h2>
        
        {/*cards container. CARDS WILL BE SIDE-BY-SIDE*/}
        <Box className="cards-container" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start" gap={2}>
          {cardData.map((card, index) => (
            <ProgramCards
              key={index}
              image={card.image}
              program={card.program}
              description={card.description}
            />
            ))}
        </Box>

        {/*Programs*/}
        <Box className="programs-container" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start" gap={0}>
          
            <Box className="left-side-container" display="flex" flexDirection="column">
              <Box className="ropeflow-container"  display="flex" flexDirection="column" alignItems="center" flexWrap="wrap">
                <Typography variant ="h3" sx={{fontFamily: "Playfair Display", fontSize: 36, fontStyle: "italic"}}>Rope Flow</Typography><br></br>
                <Typography variant = "body1" textAlign="center">
                  Rope flow is a full-body, rhythmic practice with a heavy rope that builds strength, endurance, coordination, and fluid movement. 
                  Beginners start with warm-ups and basic patterns like waves, circles, and figure-8s, focusing on smooth, flowing transitions over speed or power. 
                  The practice develops core stability, movement awareness, and style, encouraging relaxed, controlled, and expressive sequences.
                </Typography>
              </Box>

              <Box className="kettlebell-container"  display="flex" flexDirection="column" alignItems="center"> 
                <Typography variant ="h3" sx={{fontFamily: "Playfair Display", fontSize: 36, fontStyle: "italic"}}>Kettlebell</Typography><br></br>
                <Typography variant = "body1" textAlign="center">
                  Kettlebell training is a dynamic, full-body workout that builds strength, endurance, stability, and coordination. 
                  Beginners start with warm-ups and foundational movements like swings, goblet squats, deadlifts, and presses, focusing on grip, posture, and hip-hinge mechanics. 
                  Workouts emphasize controlled, fluid motion, engaging the core, legs, back, and shoulders, while improving balance and cardiovascular fitness. 
                  Practitioners develop strength, power, and body awareness, gradually linking movements into smooth, flowing sequences.
                </Typography>
              </Box>
            </Box>


            <Box className="right-side-container" display="flex" flexDirection="column">
              <Box className="steelmace-container"  display="flex" flexDirection="column" alignItems="center">
                <Typography variant ="h3" sx={{fontFamily: "Playfair Display", fontSize: 36, fontStyle: "italic"}}>Steel Mace</Typography><br></br>
                <Typography variant = "body1" textAlign="center">
                  Steel mace training is a full-body, dynamic practice that builds strength, stability, coordination, and mobility. 
                  Beginners start with warm-ups and foundational swings, circles, and presses, focusing on grip, posture, and controlled, circular motion. 
                  Workouts emphasize fluid, joint-friendly movement, engaging the core, shoulders, and hips, while improving balance and body awareness. 
                  Practitioners develop power, endurance, and movement flow, gradually linking patterns into smooth, expressive sequences.
                </Typography>
              </Box>

              <Box className="clubbell-container"  display="flex" flexDirection="column" alignItems="center">
                <Typography variant ="h3" sx={{fontFamily: "Playfair Display", fontSize: 36, fontStyle: "italic"}}>Clubbell</Typography><br></br>
                <Typography variant = "body1" textAlign="center">
                  Clubbell training is a full-body, dynamic workout that builds strength, stability, coordination, and explosive power. 
                  Beginners start with warm-ups and foundational swings, presses, and circular patterns, focusing on grip, posture, and controlled momentum. 
                  Workouts emphasize fluid, joint-safe motion, engaging the core, shoulders, and hips while improving balance and body awareness. 
                  Practitioners develop strength, power, and movement flow, gradually linking patterns into smooth, expressive sequences. 
                </Typography>
              </Box>
            </Box>

        </Box>

        <Box className="online-coaching-container" display="flex" flexDirection="column" alignItems="center">
              
          
        </Box>

        




      </Box>
      
      

    </>
  );
}

export default Programs;
