import { Box, Fade, Typography } from "@mui/material";
import React from "react";

function Intro({ introOpen }) {
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
        <Typography variant="h4">Welcome</Typography>
      </Box>
    </Fade>
  );
}

export default Intro;
