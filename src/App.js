import React from "react";
import Typography from "@mui/material/Typography";

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

      {/* heading */}
      <Typography variant="h2" fontWeight="medium" color="#121113">
        A better way to enjoy every day.
      </Typography>

      {/* small piece of text */}
      <Typography variant="h5" marginTop="4%" color="#121113">
        Be the first to know when we launch.
      </Typography>

      {/* REQUEST INVITE BUTTON */}

      <Footer />
    </>
  );
}
