import { createTheme } from "@mui/material/styles";

const typography = createTheme({
  typography: {
    button: {
      fontFamily: "Arimo",
      fontSize: 16,
    },

    h1: {
      fontFamily: "Playfair Display",
      fontSize: 120,
      letterSpacing: "-5px",
    },

    h2: {
      fontFamily: "Playfair Display",
      fontSize: 60,
    },

    h3: {
      fontFamily: "Arimo",
      fontSize: 24,
    },

    h4: {
      //logo
      fontFamily: "Anton",
      fontSize: 25,
    },

    body1: {
      fontFamily: "Arimo",
      fontSize: 16,
    },
  },
});

export default typography;
