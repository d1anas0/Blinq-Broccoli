import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function FormModal() {
  return (
    <Dialog
      //   role="form"
      maxWidth="xs"
      open
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        style={{
          padding: "6%",
        }}
      >
        <DialogTitle>Request an Invite</DialogTitle>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          sx={{ mt: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
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
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm-email"
                label="Confirm Email"
                type="confirm-email"
                id="confirm-email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#db7f50", color: "#121113" }}
            sx={{ my: 6 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
