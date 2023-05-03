import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

// primary colour = #9FBF9Bd
// secondary colour = #121113
// text colour = #EFEDE6
// cta = #DB7f50

export default function App() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

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

        <Box style={{ marginTop: "4%" }}>
          <Button
            role="button"
            style={{ backgroundColor: "#DB7f50", color: "#121113" }}
            variant="contained"
            size="large"
            onClick={openModal}
          >
            Request an Invite
          </Button>
        </Box>
        <Modal open={open} closeModal={closeModal} />
      </Box>
      <Footer />
    </>
  );
}
