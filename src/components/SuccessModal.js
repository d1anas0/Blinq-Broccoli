import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

export function SuccessModal({ openSuccessModal, closeSuccessModal }) {
  
    // closeSuccessModal should also close FormModal...

  return (
    <Dialog maxWidth="xs" open={openSuccessModal} onClose={closeSuccessModal}>
      <DialogTitle
        data-testid="dialog-title"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#EFEDE6",
          padding: "10%",
        }}
      >
        Amazing! We'll be in touch soon 😉
      </DialogTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#EFEDE6",
          px: "6%",
        }}
      ></Box>
    </Dialog>
  );
}