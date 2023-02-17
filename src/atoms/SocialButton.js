import React from "react";
// MUI
import { IconButton, Link } from "@mui/material";

function SocialButton({ children, title, url }) {
  return (
    <Link href={url} target="_blank" underline="none" sx={{ p: 0 }}>
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
      >
        {children}
      </IconButton>
    </Link>
  );
}

export default SocialButton;
