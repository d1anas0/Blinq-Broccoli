import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function FormModal({ openModal, closeModal }) {
  // get email input
  const [emailValue, setEmailValue] = useState("");
  const handleEmailValue = (input) => {
    setEmailValue(input.target.value);
  };

  // Email Validation - applying `inputProps={{ pattern: xxx }}` attribute to <TextField> does not work.
  const [emailError, setEmailError] = useState(false);
  const validateEmail = (e) => {
    e.preventDefault();
    const emailFormat = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(
      emailValue
    );
    !emailFormat ? setEmailError(true) : setEmailError(false);
    console.log(emailFormat);
  };

  //___________________________________________________________

  // Confirm email matches

  // get confirm email input
  // const [confirmEmailValue, setConfirmEmailValue] = useState("");
  // const handleConfirmEmailValue = (input) => {
  //   setConfirmEmailValue(input.target.value);
  //   console.log(`Confirm email value = ${input.target.value}`);
  // };
  // const checkEmailMatches =
  //   emailValue === confirmEmailValue
  //     ? () => alert("submitted!")
  //     : () => alert("try again!");

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
          <Grid container spacing={2}>
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
                error={emailError}
                required
                fullWidth
                type="email"
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={emailValue}
                onChange={handleEmailValue}
                // Note: pattern attribute does not work? Browser responds with error message which I can't relate my code to >.<"
                // inputProps={{
                //   pattern: "[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
                // }}
                // Would consider using eg. React-Hook-Form for more involved/complex forms
              />
            </Grid>
            {/* <Grid item xs={12}>
              {/* <TextField
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
            </Grid> */}
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#199059", color: "#121113" }}
            sx={{ my: "15%" }}
            onClick={
              validateEmail
              //&& checkEmailMatches
            }
          >
            Send
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
