import React from "react";
// MUI
import { Box, Container, Grid, Typography } from "@mui/material";
// images
import bg from "../images/keyboard.jpg";
import myself from "../images/my-photo.png";

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: 2,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Box
        sx={{
          height: "33vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage: "linear-gradient( #000, rgba(0,0,0,0))",
        }}
      ></Box>
      <Box
        sx={{
          height: "33vh",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundImage: "linear-gradient( rgba(0,0,0,0), #1e1e1e)",
        }}
      ></Box>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} sx={{ pl: { sm: 8 } }}>
            <Typography textAlign="center" variant="h3">
              Hi, I'm Ali
            </Typography>
            <Typography textAlign="center" mt={3} variant="h4">
              Front-end
              <span style={{ color: "#dcdcaa" }}> Web developer</span>
              <span style={{ color: "#ffd700" }}>()</span>
            </Typography>
          </Grid>

          <Grid
            item
            sm={6}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              p: 3,
            }}
          >
            <img src={myself} alt="" style={{ width: "100%", maxWidth: 300 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
