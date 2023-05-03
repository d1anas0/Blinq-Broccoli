import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

export function FormModal() {
  return (
    <Dialog role="form" open>
      <Box>
        <Typography variant="h4">Request Invite Form Here</Typography>
      </Box>
    </Dialog>
  );
}
