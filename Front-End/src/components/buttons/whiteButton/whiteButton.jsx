import Button from "@mui/material/Button";

function WhiteButton({children, sx={}, ...props}) {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        color: "var(--primary-color)",
        backgroundColor: "var(--third-color)",
        fontSize: "30px",
        padding: "8px 16px",
        minWidth: "100px",
        borderRadius: "30px",
        ...sx, //allows override
      }}
    >
      {children}
    </Button>
  );
}

export default WhiteButton;
