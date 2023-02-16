import { Button } from "@mui/material";
import React from "react";

function MyButton({ children, variant }) {
  return (
    <Button
      variant={variant}
      sx={{
        color: { xs: "#fff", sm: "rgba(255,255,255,0.7)" },
        "&:hover": {
          color: "#fff",
          textShadow: "0 0 5px #c375ff",
          borderColor: "#fff",
          boxShadow: "0 0 5px #c375ff",
        },
        borderColor: { xs: "#fff", sm: "rgba(255,255,255,0.7)" },
        boxShadow: { xs: "0 0 5px #c375ff", sm: "none" },
      }}
    >
      {children}
    </Button>
  );
}

export default MyButton;
