import Button from "@mui/material/Button";

function greenButton({children}) {
  return (
    <Button
      variant="contained"
      sx={{
        color: "var(--third-color)",
        backgroundColor: "var(--primary-color)",
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

export default greenButton;
