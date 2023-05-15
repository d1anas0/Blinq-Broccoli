import React from "react";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export function SuccessModal({ openSuccessModal, closeSuccessModal }) {
  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      open={openSuccessModal}
      onClose={closeSuccessModal}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#EFEDE6",
          padding: "10%",
        }}
      >
        <Typography variant="h6" color="#0E1B0E" marginBottom="6%">
          Amazing!
        </Typography>
        <Typography variant="body1" color="#0E1B0E">
          We'll be in touch soon 😉
        </Typography>
      </Card>
    </Dialog>
  );
}
