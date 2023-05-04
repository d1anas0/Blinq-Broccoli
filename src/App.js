import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FormModal } from "./components/FormModal";

// primary colour = #9FBF9B
// secondary colour = #121113
// text colour = #E0DDCF
// text colour = #EFEDE6

// primary colour = #9FBF9B
// secondary colour = #199059
// text colour = #0E1B0E
// base/background? colour = #EFEDE6

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(true); // change back to false when ready!

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
            variant="contained"
            size="large"
            style={{ backgroundColor: "#db7f50", color: "#121113" }}
            onClick={openModal}
          >
            request an invite
          </Button>
          <FormModal openModal={isVisible} closeModal={closeModal} />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
