import Button from "@mui/material/Button";

//props for customizing. if nothing passes, current values are default
function GreenButton({ children, fontSize = "30px", padding = "8px 16px", minWidth = "100px", borderRadius = "30px", ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        color: "var(--third-color)",
        backgroundColor: "var(--primary-color)",
        fontSize,
        padding,
        minWidth,
        borderRadius,
      }}
      {...props} // passes other props like onClick, disabled, etc.
    >
      {children}
    </Button>
  );
}

export default GreenButton;