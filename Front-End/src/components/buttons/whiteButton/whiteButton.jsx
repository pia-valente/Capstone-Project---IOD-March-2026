import Button from "@mui/material/Button";

function whiteButton({children}) {
  return (
    <Button
      variant="contained"
      sx={{
        color: "var(--primary-color)",
        backgroundColor: "var(--third-color)",
        fontSize: "30px",
        padding: "8px 16px",
        minWidth: "100px",
        borderRadius: "30px",
      }}
    >
      {children}
    </Button>
  );
}

export default whiteButton;
