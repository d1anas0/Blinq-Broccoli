import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function FormModal({ openModal, closeModal }) {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [confirmEmailValue, setConfirmEmailValue] = useState("");
  const [emailMatchError, setEmailMatchError] = useState(false);

  const handleFullName = (input) => {
    setFullName(input.target.value);
  };
  const handleEmailValue = (input) => {
    setEmailValue(input.target.value);
  };
  const handleConfirmEmailValue = (input) => {
    setConfirmEmailValue(input.target.value);
  };

  const validateFormInputs = (e) => {
    e.preventDefault();

    // Check name has > 3 characters
    const nameValid = fullName.length > 2;
    !nameValid ? setFullNameError(true) : setFullNameError(false);

    // Email Validation - applying `inputProps={{ pattern: xxx }}` attribute to <TextField> does not work.
    // Would consider using eg. React-Hook-Form for more involved/complex forms
    const emailFormatValid =
      /[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(emailValue);
    !emailFormatValid ? setEmailFormatError(true) : setEmailFormatError(false);

    // Confirm email matches
    const confirmEmail = emailValue === confirmEmailValue;
    !confirmEmail ? setEmailMatchError(true) : setEmailMatchError(false);
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
        {/*form components  */}
        <Box component="form">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                helperText="Minimum 3 characters"
                error={fullNameError}
                required
                fullWidth
                type="text"
                id="full-name"
                label="Full Name"
                name="full-name"
                value={fullName}
                onChange={handleFullName}
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
                value={emailValue}
                onChange={handleEmailValue}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                helperText="Emails must match, case-sensitive"
                error={emailMatchError}
                required
                fullWidth
                type="email"
                id="confirm-email"
                label="Confirm Email"
                name="confirm-email"
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
            onClick={validateFormInputs}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
