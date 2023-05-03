import React from "react";
// import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

export function Modal({ open, closeModal }) {
  return (
    <Dialog onClose={closeModal} open={open} role="form">
      <Box>
        <Typography id="" variant="h4">
          Request Invite Modal
        </Typography>
      </Box>
    </Dialog>
  );
}

// Modal.propTypes = {
//   open: PropTypes.bool.isRequired,
// };
