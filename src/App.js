import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// primary colour = #9FBF9B
// secondary colour = #121113
// text colour = #E0DDCF
// text colour = #EFEDE6

export default function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        style={{
          height: "100vh",
          padding: "6%",
        }}
        backgroundColor="#9FBF9B"
        align="center"
      >
        <Typography variant="h2" fontWeight="medium" color="#121113">
          A better way to enjoy every day.
        </Typography>
        <Typography variant="h5" marginTop="4%" color="#121113">
          Be the first to know when we launch.
        </Typography>

        {/* REQUEST INVITE BUTTON */}
        <Box style={{ marginTop: "4%" }}>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#db7f50", color: "#121113" }}
            onClick={() => alert("clicked!")}
          >
            request an invite
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
