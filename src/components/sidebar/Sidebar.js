import React from "react";
// MUI
import { Box, Fade } from "@mui/material";
// atoms
import SocialButton from "../../atoms/SocialButton";
// icons
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

function Sidebar({ showSidebar }) {
  return (
    <Fade in={showSidebar} timeout={1000}>
      <Box
        sx={{
          position: "fixed",

          left: "3vw",
          bottom: 0,
          zIndex: 1200,
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <SocialButton title="Github" url="https://github.com/alisherkhan98">
          <FaGithub size="20px" />
        </SocialButton>
        <SocialButton
          title="LinkedIn"
          url="https://www.linkedin.com/in/alisherkhan98/"
        >
          <FaLinkedin size="20px" />
        </SocialButton>
        <SocialButton
          title="Instagram"
          url="https://twitter.com/AliSher03212351"
        >
          <FaTwitter size="20px" />
        </SocialButton>
        <SocialButton
          title="Discord"
          url="https://discordapp.com/users/Metaxa#5113"
        >
          <FaDiscord size="20px" />
        </SocialButton>
        <Box
          sx={{
            width: 0,
            height: "15vh",
            border: "1px solid #fff",
            boxShadow: "0 0 5px #c375ff",
          }}
        ></Box>
      </Box>
    </Fade>
  );
}

export default Sidebar;
