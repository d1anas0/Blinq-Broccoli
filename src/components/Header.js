import React from "react";
import AppBar from "@mui/material/AppBar";

export function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#121113",
        typography: "h6",
        textAlign: "left",
        texTransform: "uppercase",
        color: "#9FBFB9B",
      }}
      style={{ padding: 10, paddingLeft: 20 }}
    >
      Broccoli & Co.
    </AppBar>
  );
}
