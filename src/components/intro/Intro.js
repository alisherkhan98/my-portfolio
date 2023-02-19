import { Box, Fade, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

import "./Intro.css";

function Intro({ introOpen }) {
  var introText = document.getElementById("introText");

  var typewriter = new Typewriter(introText);

  typewriter.typeString("Welcome").start().pauseFor(1000).deleteAll("natural");

  return (
    <Fade in={introOpen} appear={false}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1e1e1e",
          zIndex: 1200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ width: "fit-content" }}
          className="typewriter"
          variant="h4"
          id="introText"
        ></Typography>
      </Box>
    </Fade>
  );
}

export default Intro;
