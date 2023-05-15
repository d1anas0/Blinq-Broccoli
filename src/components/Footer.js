import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#121113",
      }}
    >
      <Typography variant="body2" align="center" color="#EFEDE6">
        Made with{" "}
        <span role="img" aria-label="love">
          💚
        </span>{" "}
        in Melbourne
      </Typography>
      <Typography variant="body2" align="center" color="#EFEDE6">
        <span role="img" aria-label="copyright">
          ©{" "}
        </span>
        Broccoli & Co. All rights reserved.
      </Typography>
    </AppBar>
  );
}
