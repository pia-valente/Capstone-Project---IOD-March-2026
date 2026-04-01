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
          <p>Project Flow is about more than just training, it’s about stepping into a different way of moving. Built around unconventional practices such as rope flow, 
            kettlebells, steel mace, and clubbells, it introduces a dynamic approach to developing strength, coordination, and resilience.
            Rather than focusing on individual workouts or structured group identity, Project Flow encourages people to be part of something in motion. 
            It’s an open invitation to explore movement, challenge the body in new ways, and break away from traditional fitness routines.
            With guidance from a coach, individuals train alongside others, not as a requirement, but as a shared energy that naturally builds consistency and motivation. 
            It’s a space where anyone, regardless of experience, can show up, learn, and evolve at their own pace. The emphasis isn’t just on getting stronger, 
            it’s about moving with intention, building confidence, and embracing a practice that grows with you. Project Flow is about joining the movement, 
            not just the session, making fitness feel engaging, sustainable, and alive.</p>
        </Box>

        <Box className= "right-community-container" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
         <LoginBox></LoginBox>
        </Box>
       

      </Box>
    </>
  );
};

export default Community;
