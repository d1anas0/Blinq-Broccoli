import React from "react";
import AppBar from "@mui/material/AppBar";

export function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "red",
      }}
    >
      This is the Footer
    </AppBar>
  );
}
