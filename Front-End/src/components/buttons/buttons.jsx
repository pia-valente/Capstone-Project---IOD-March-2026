import Button from "@mui/material/Button";

function AppButton() {
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
      TRY FOR 7 DAYS
    </Button>
  );
}

export default AppButton;
