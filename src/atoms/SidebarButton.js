import React from "react";
// MUI
import { IconButton } from "@mui/material";

function SidebarButton({ children, onClick, title }) {
  return (
    <IconButton
      title={title}
      sx={{
        color: "rgba(255,255,255,0.4)",
        "& svg:hover": {
          color: "#fff",
          filter: "drop-shadow(0 0 5px #c375ff)",
          transform: "scale(1.1)",
        },
        p: "4px",
        m: "8px",
      }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
}

export default SidebarButton;
