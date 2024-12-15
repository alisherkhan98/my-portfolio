import { Box, Link, Typography } from "@mui/material";
import React from "react";
import MyButton from "../../atoms/MyButton";

function AboutMe() {
  return (
    <Box
      sx={{
        py: 15,
        px: { xs: "30px", sm: "100px" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="aboutme"
    >
      <Box sx={{ maxWidth: 700, mb: 5 }}>
        <Typography variant="h4" mb={3}>
          About me
        </Typography>
        <Typography variant="body1" mb={3}>
          Hello, my name is Ali. I am a{" "}
          <span style={{ color: "#d7ba7d" }}>.front-end</span> web developer and
          soon i will start to study some{" "}
          <span style={{ color: "#ce9178" }}>"back-end"</span> as well.{" "}
        </Typography>
        <Typography variant="body1" mb={3}>
          My journey in web development started when i joined the beautiful
          community of{" "}
          <Link
            underline="none"
            color="#4ec9bc"
            href="https://www.start2impact.it"
            target="_blank"
          >
            start2impact
          </Link>
          , which helped me study and practice what I learned by applying the
          theory to some interesting projects.
        </Typography>
        <Typography variant="body1" mb={3}>
          You can see the skills I acquired and my work in the following
          section.
        </Typography>
      </Box>
      <Link href="#skills" underline="none" sx={{ p: 0 }}>
        <MyButton variant="outlined">Explore</MyButton>
      </Link>
    </Box>
  );
}

export default AboutMe;
