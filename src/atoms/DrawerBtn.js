import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function DrawerBtn({ text, icon }) {
  return (
    <ListItemButton sx={{ textAlign: "left", pl: 0 }}>
      <ListItemIcon sx={{ justifyContent: "flex-end", mr: 1 }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}

export default DrawerBtn;
