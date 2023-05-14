import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { SuccessModal } from "./SuccessModal";

export function FormModal({ openFormModal, closeModal }) {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [confirmEmailValue, setConfirmEmailValue] = useState("");
  const [emailMatchError, setEmailMatchError] = useState(false);
  const [buttonText, setButtonText] = useState("send");
  const [buttonStyle, setButtonStyle] = useState(false);

  // success modal
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const openSuccessModal = () => setSubmitSuccess(true);
  const closeSuccessModal = () => setSubmitSuccess(false);

  const handleFullName = (input) => {
    setFullName(input.target.value);
  };
  const handleEmailValue = (input) => {
    setEmailValue(input.target.value);
  };
  const handleConfirmEmailValue = (input) => {
    setConfirmEmailValue(input.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValid = fullName.length > 2;
    !nameValid ? setFullNameError(true) : setFullNameError(false);

    const emailFormatValid =
      /[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(emailValue);
    !emailFormatValid ? setEmailFormatError(true) : setEmailFormatError(false);

    const confirmEmail = emailValue === confirmEmailValue;
    !confirmEmail ? setEmailMatchError(true) : setEmailMatchError(false);

    //useEffect?
    if (nameValid && emailFormatValid && confirmEmail) {
      setButtonText("sending");
      setButtonStyle(true);

      fetch("https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: fullName,
          email: emailValue,
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(
              alert(
                `Oops, that's a ${response.status} (bad request). Please try again 😔`
              )
            );
          }
          response.json();
        })
        .then(() => {
          openSuccessModal();
          setButtonText("send");
          setButtonStyle(false);
        })
        .catch(() => {
          setButtonText("send");
          setButtonStyle(false);
        });
    }
  };

  return (
    <>
      {submitSuccess ? (
        <SuccessModal
          openSuccessModal={submitSuccess}
          closeSuccessModal={closeSuccessModal}
        />
      ) : (
        <Dialog maxWidth="xs" open={openFormModal} onClose={closeModal}>
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
            <form onSubmit={handleSubmit}>
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
                style={
                  buttonStyle
                    ? { backgroundColor: "#ee881b", color: "#EFEDE6" }
                    : { backgroundColor: "#199059", color: "#EFEDE6" }
                }
                sx={{ my: "15%" }}
              >
                {buttonText}
              </Button>
            </form>
          </Box>
        </Dialog>
      )}
    </>
  );
}
