import React from "react";
// MUI
import { Box } from "@mui/material";
// atoms
import SidebarButton from "../../atoms/SidebarButton";
// icons
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
function Sidebar() {
  return (
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
      <SidebarButton title="Github">
        <FaGithub size="20px" />
      </SidebarButton>
      <SidebarButton title="LinkedIn">
        <FaLinkedin size="20px" />
      </SidebarButton>
      <SidebarButton title="Instagram">
        <FaInstagram size="20px" />
      </SidebarButton>
      <SidebarButton title="Discord">
        <FaDiscord size="20px" />
      </SidebarButton>
      <Box
        sx={{
          width: 0,
          height: "15vh",
          border: "1px solid #fff",
          boxShadow: "0 0 5px #c375ff",
        }}
      ></Box>
    </Box>
  );
}

export default Sidebar;
