import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function FormModal({ openModal, closeModal }) {
  const [emailValue, setEmailValue] = useState("");
  const handleChange = (input) => {
    setEmailValue(input.target.value);
    console.log(`${input.target.value}`);
  };

  return (
    <Dialog role="form" maxWidth="xs" open={openModal} onClose={closeModal}>
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
        Request an Invite
      </DialogTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#EFEDE6",
          px: "6%",
        }}
      >
        <Box
          //
          component="form"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputProps={{ minLength: 3 }}
                // helperText="Min. 3 characters"
                required
                fullWidth
                id="full name"
                label="Full Name"
                name="full name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={emailValue}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="confirm-email"
                label="Confirm Email"
                name="confirm-email"
                autcomplete="false"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#199059", color: "#121113" }}
            sx={{ my: "15%" }}
            onSubmit={() => alert("clicked submit!")}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
