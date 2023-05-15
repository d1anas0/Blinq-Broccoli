import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { SuccessModal } from "./SuccessModal";
import { Typography } from "@mui/material";

export function FormModal({ openFormModal, closeModal }) {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    emailValue: "",
    confirmEmailValue: "",
  });

  const handleFullName = (input) => {
    setInputValue({ ...inputValue, fullName: input.target.value });
  };
  const handleEmailValue = (input) => {
    setInputValue({ ...inputValue, emailValue: input.target.value });
  };
  const handleConfirmEmailValue = (input) => {
    setInputValue({ ...inputValue, confirmEmailValue: input.target.value });
  };

  const [fullNameError, setFullNameError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [emailMatchError, setEmailMatchError] = useState(false);

  const [buttonText, setButtonText] = useState("send");
  const [buttonStyle, setButtonStyle] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const openSuccessModal = () => setSubmitSuccess(true);
  const closeSuccessModal = () => setSubmitSuccess(false);

  const [requestFail, setRequestFail] = useState(false);
  const openAlert = () => setRequestFail(true);
  const closeAlert = () => setRequestFail(false);
  const [requestStatus, setRequestStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValid = inputValue.fullName.length > 2;
    !nameValid ? setFullNameError(true) : setFullNameError(false);

    const emailFormatValid =
      /[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(
        inputValue.emailValue
      );
    !emailFormatValid ? setEmailFormatError(true) : setEmailFormatError(false);

    const confirmEmail = inputValue.emailValue === inputValue.confirmEmailValue;
    !confirmEmail ? setEmailMatchError(true) : setEmailMatchError(false);

    if (nameValid && emailFormatValid && confirmEmail) {
      setButtonText("sending");
      setButtonStyle(true);

      fetch("https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: inputValue.fullName,
          email: inputValue.emailValue,
        }),
      })
        .then((response) => {
          console.log(response.status);
          if (response.status !== 200) {
            throw new Error(
              openAlert(),
              setRequestStatus(`${response.status}`)
            );
          }
        })
        .then(() => {
          openSuccessModal();
          setButtonText("send");
          setButtonStyle(false);
          closeModal();
          setInputValue({
            fullName: "",
            emailValue: "",
            confirmEmailValue: "",
          });
          closeAlert();
          setRequestStatus("");
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
                    color="success"
                    helperText="Minimum 3 characters"
                    error={fullNameError}
                    required
                    fullWidth
                    type="text"
                    id="full-name"
                    label="Full Name"
                    name="full-name"
                    value={inputValue.fullName}
                    onChange={handleFullName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="success"
                    helperText="Required format = abc123@mailbox.com"
                    error={emailFormatError}
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={inputValue.emailValue}
                    onChange={handleEmailValue}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="success"
                    helperText="Emails must match, case-sensitive"
                    error={emailMatchError}
                    required
                    fullWidth
                    id="confirm-email"
                    label="Confirm Email"
                    name="confirm-email"
                    value={inputValue.confirmEmailValue}
                    onChange={handleConfirmEmailValue}
                  />
                </Grid>
              </Grid>
              {requestFail ? (
                <Alert
                  severity="error"
                  variant="outlined"
                  sx={{ mt: "8%", backgroundColor: "#FACFCF" }}
                >
                  Oh no, that's a {requestStatus} (bad request).
                  <br />
                  Please check your entries and re-send.
                </Alert>
              ) : null}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                style={
                  buttonStyle
                    ? { backgroundColor: "#ee881b", color: "#EFEDE6" }
                    : { backgroundColor: "#199059", color: "#EFEDE6" }
                }
                sx={{ mt: "8%", mb: "14%" }}
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
