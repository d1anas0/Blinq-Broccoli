import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function FormModal({ openModal, closeModal }) {
  const [emailValue, setEmailValue] = useState("");
  const [confirmEmailValue, setConfirmEmailValue] = useState("");
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [emailMatchError, setEmailMatchError] = useState(false);

  const handleEmailValue = (input) => {
    setEmailValue(input.target.value);
  };
  const handleConfirmEmailValue = (input) => {
    setConfirmEmailValue(input.target.value);
  };

  // Email Validation - applying `inputProps={{ pattern: xxx }}` attribute to <TextField> does not work.
  const validateEmail = (e) => {
    e.preventDefault();
    const emailFormat = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(
      emailValue
    );
    !emailFormat ? setEmailFormatError(true) : setEmailFormatError(false);
    console.log("is email format conforming", emailFormat);

    // Confirm email matches
    const confirmEmail = emailValue === confirmEmailValue;
    !confirmEmail ? setEmailMatchError(true) : setEmailMatchError(false);
    console.log("does email match : ", confirmEmail);
  };

  return (
    <Dialog maxWidth="xs" open={openModal} onClose={closeModal}>
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
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                inputProps={{ minLength: 3 }}
                helperText="Minimum 3 characters"
                // error

                required
                fullWidth
                type="text"
                id="full-name"
                label="Full Name"
                name="full-name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                helperText="Required format = abc123@mailbox.com"
                error={emailFormatError}
                required
                fullWidth
                type="email"
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={emailValue}
                onChange={handleEmailValue}

                // Would consider using eg. React-Hook-Form for more involved/complex forms
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                helperText="Emails must match"
                error={emailMatchError}
                required
                fullWidth
                type="email"
                id="confirm-email"
                label="Confirm Email"
                name="confirm-email"
                autcomplete="false"
                value={confirmEmailValue}
                onChange={handleConfirmEmailValue}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#199059", color: "#121113" }}
            sx={{ my: "15%" }}
            onClick={validateEmail}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
