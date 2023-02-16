import React from "react";
// router
// MUI
import { Button, Link } from "@mui/material";

function NavbarBtn({ title, tag }) {
  return (
    <Link href={tag} underline="none" sx={{ p: 0 }}>
      <Button
        sx={{
          color: "rgba(255,255,255,0.7)",
          m: { xs: 1, md: 2 },
          "&:hover": {
            color: "#fff",
            textShadow: "0 0 5px #c375ff",
          },
        }}
      >
        {title}
      </Button>
    </Link>
  );
}

export default NavbarBtn;
