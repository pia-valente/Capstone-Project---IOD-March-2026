import React from "react";
import { Box } from "@mui/material";
import "./contact.css";
import WhiteButton from "../../components/buttons/whiteButton/whiteButton";
import ReviewCard from "../../components/cards/reviewCards/reviewCards";

function Contact() {
  return (
    <Box id="contact" className="contact-page-container" display="flex" flexDirection="column" gap={0}>
      
      <Box className="one-on-one-coaching-container" display="flex" flexDirection="column" alignItems="center">
          <h2 style ={{margin: "40px 0px 30px 0", textAlign:"center", color:"var(--third-color)"}}>1 : 1 Coaching</h2>
          <WhiteButton>Book a Consultation</WhiteButton>
      </Box>

      <Box>
        <ReviewCard></ReviewCard>

      </Box>

    </Box>

  );
}

export default Contact;