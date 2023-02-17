import React from "react";
// MUI
import { Box } from "@mui/material";
// atoms
import SocialButton from "../../atoms/SocialButton";
// icons
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";

function MobileSocials() {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 300,
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
      <SocialButton title="Instagram" url="https://twitter.com/AliSher03212351">
        <FaTwitter size="20px" />
      </SocialButton>
      <SocialButton
        title="Discord"
        url="https://discordapp.com/users/Metaxa#5113"
      >
        <FaDiscord size="20px" />
      </SocialButton>
    </Box>
  );
}

export default MobileSocials;
