import React from "react";
import "./programs.css";
import { Box } from "@mui/material";
import ProgramCards from "../../components/cards/programCards";

const cardData = [
  {
    id: 0,
    image: "https://www.octomoves.com/cdn/shop/files/Rokas_Palanga_1200x1200.jpg?v=1614343530",
    program: "Rope Flow",
    description: "Flow, Strength, Rhythm"
    
  },

  {
    id: 1,
    image: "https://magazine.xeniosusa.com/wp-content/uploads/2023/04/img1-3.jpg",
    program: "Kettlebell",
    description: "Power, Endurance, Control"
  },

  {
    id: 2,
    image: "https://images01.military.com/sites/default/files/styles/full/public/2021-06/mace1.jpeg.jpg",
    program: "Steel Mace",
    description: "Leverage, Strength, Flow"
  },

  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMK52HeGeOfACh6PfGcfasjzmk3oHpMSYiQ&s",
    program: "Clubbell",
    description: "Momentum, Stability, Power"
  },
]

function Programs() {
  return ( 
    <Box id="programs" className="programs-page-container">
      <Box className="header">
        <h2>Programmes</h2>
      </Box>

      <Box className="cards" display="flex" flexDirection="row">
        {cardData.map((card, index) => (
            <ProgramCards
              key={index}
              image={card.image}
              program={card.program}
              description={card.description}
            />
            ))}
      </Box>
    </Box>
    
  );
}

export default Programs;



/*
<Box id= "programs" className="programs-page-container" display="flex" flexDirection= "column" justifyContent= "center" alignItems="flex-start" gap={0}>
        <h2>Programs</h2>
        
        {/*cards container. CARDS WILL BE SIDE-BY-SIDE*
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

        {/*Programs name here*/
        
  