import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "var(--third-color)"}}>
      <AppBar position="sticky" color="third" elevation={0} >
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
            <Button sx={{textTransform: "none", color: "var(--text-color)", fontFamily: "Anton",fontSize: "24px", display: "flex", justifyContent: "flex-start"}} component={NavLink} to ="/">The FitKit</Button>

            <Box sx={{ display: "flex", gap: 2 }}>
                <Button sx={{textTransform: "none", color: "var(--text-color)", fontSize: "18px"}} component={NavLink} to ="/" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Home</Button>
                <Button sx={{textTransform: "none", color: "var(--text-color)", fontSize: "18px"}} component={NavLink} to ="/about" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>About</Button>
                <Button sx={{textTransform: "none", color: "var(--text-color)", fontSize: "18px"}} component={NavLink} to ="/programs" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Programs</Button>
                <Button sx={{textTransform: "none", color: "var(--text-color)", fontSize: "18px"}} component={NavLink} to ="/community" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Community</Button>
                <Button sx={{textTransform: "none", color: "var(--text-color)", fontSize: "18px"}} component={NavLink} to ="/contact" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Contact</Button>
                <Button sx={{textTransform: "none", color: "var(--text-color)", fontSize: "18px"}} component={NavLink} to ="/login" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Login</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
