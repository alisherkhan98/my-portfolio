import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function DrawerBtn({ text, icon, url }) {
  return (
    <Link href={url} underline="none" sx={{ p: 0 }} color="inherit">
      <ListItemButton sx={{ textAlign: "left", pl: 0 }}>
        <ListItemIcon sx={{ justifyContent: "flex-end", mr: 1 }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
}

export default DrawerBtn;
