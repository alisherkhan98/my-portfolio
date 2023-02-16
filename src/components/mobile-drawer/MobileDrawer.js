import React from "react";
// MUI
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import DrawerBtn from "../../atoms/DrawerBtn";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const drawerWidth = 240;

function MobileDrawer({ handleDrawerToggle, mobileOpen, window, navItems }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "left" }} onClick={handleClick}>
            {open ? (
              <MdKeyboardArrowRight size="24px" />
            ) : (
              <MdKeyboardArrowDown size="24px" />
            )}
            <ListItemText primary={"ali-sher-khan"} />
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{
              p: 0,
              ml: "26px",
              borderLeft: "1px solid rgba(255,255,255,0.4)",
            }}
            onClick={handleDrawerToggle}
          >
            <DrawerBtn
              text="index.html"
              path="/"
              icon={
                <>
                  <MdKeyboardArrowLeft
                    size="20px"
                    preserveAspectRatio="none"
                    viewBox="6 0 12 24"
                    style={{ width: 12, color: "#e37933" }}
                  />
                  <MdKeyboardArrowRight
                    size="20px"
                    preserveAspectRatio="none"
                    viewBox="6 0 12 24"
                    style={{ width: 12, color: "#e37933" }}
                  />
                </>
              }
            />
            <DrawerBtn
              text="ABOUTME.md"
              path="/aboutme"
              icon={<ImInfo color="#519aba" />}
            />
            <DrawerBtn
              text="skills.js"
              path="/skills"
              icon={<Typography color="#cbcb41">JS</Typography>}
            />
            <DrawerBtn
              text="my-work.css"
              path="/work"
              icon={<FaHashtag color="#519aba" />}
            />
            <DrawerBtn
              text="contact.ts"
              path="/contact"
              icon={<Typography color="#519aba">TS</Typography>}
            />
          </List>
        </Collapse>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        backgroundColor: "#252526",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}

export default MobileDrawer;
