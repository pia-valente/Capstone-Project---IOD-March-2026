import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";

//Merge all themes here
const theme = createTheme({
  ...typography,
  ...palette,
});

export default theme;