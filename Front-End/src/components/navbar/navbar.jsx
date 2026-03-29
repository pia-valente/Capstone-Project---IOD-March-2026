import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";



function Navbar({onLoginClick}) {
  return (
    <Box sx={{ width: "100%", backgroundColor: "var(--third-color)"}}>
      <AppBar sx={{ backgroundColor: "var(--third-color)", boxShadow: "none" }}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
            <Button sx={{textTransform: "none", color: "var(--text-color)", fontFamily: "Anton",fontSize: "32px", display: "flex", justifyContent: "flex-start"}} component={NavLink} to ="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>The FitKit</Button>

            <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px", }} component={NavLink} to ="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Home</Button>
                

                <ScrollLink to ="about" smooth={true} duration={500} style = {{textDecoration: "none"}}><Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }}>About</Button></ScrollLink>
                <ScrollLink to ="programs" smooth={true} duration={500} style = {{textDecoration: "none"}}><Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }}>Programs</Button></ScrollLink>
                <ScrollLink to ="contact" smooth={true} duration={500} style = {{textDecoration: "none"}}><Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }}>Contact</Button></ScrollLink>
                <ScrollLink to ="community" smooth={true} duration={500} style = {{textDecoration: "none"}}><Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }}>Project Flow</Button></ScrollLink>
                <Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }} onClick={onLoginClick}>Login</Button>
                
                <Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }} component={NavLink} to= "/userpage" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>User Page</Button>
                <Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }} component={NavLink} to= "/adminpage" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Admin</Button>

                
                
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar


/*

<Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px" }} component={NavLink} to ="Signup" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Sign Up</Button>

                

<Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px", }} component={NavLink} to ="/programs" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Programs</Button>
<Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px", }} component={NavLink} to ="/community" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Community</Button>
Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px", }} component={NavLink} to ="/contact" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Contact</Button>
<Button variant = "text" sx={{textTransform: "none", color: "var(--text-color)", fontSize: "22px", }} component={NavLink} to ="/login" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Login</Button>
            </ScrollLink>*/


