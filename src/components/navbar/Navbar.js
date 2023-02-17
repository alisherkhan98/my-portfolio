import React, { useEffect } from "react";
// MUI
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Fade,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
// icons
import { GiHamburgerMenu } from "react-icons/gi";

import MobileDrawer from "../mobile-drawer/MobileDrawer";
import NavbarBtn from "../../atoms/NavbarBtn";

const navItems = [
  { title: "About me", tag: "#aboutme" },
  { title: "Skills", tag: "#skills" },
  { title: "My work", tag: "#mywork" },
  { title: "Contact me", tag: "#contactme" },
];

function Navbar({ showNav }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // state to show navbar
  const [show, setShow] = React.useState(false);

  const extendedNav = useMediaQuery("(min-width:700px)");

  // listener for scroll
  React.useEffect(() => {
    function navTransition() {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    setShow(false);
    window.addEventListener("scroll", navTransition);
    return () => window.removeEventListener("scroll", navTransition);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Fade in={showNav} timeout={1000}>
        <AppBar
          component="nav"
          elevation={show ? 5 : 0}
          sx={{
            backgroundColor: show ? "rgba(0,0,0,0.9)" : "transparent",
            transition: "all 500ms ease",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  position: "fixed",

                  display: extendedNav ? "none" : "flex",
                  color: "rgba(255,255,255,0.4)",
                  "&:hover": { color: "#fff" },
                }}
              >
                <GiHamburgerMenu />
              </IconButton>

              {/* logo */}
              <Typography
                variant="body1"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: extendedNav ? "left" : "center",
                }}
              >
                <span
                  style={{
                    fontWeight: 500,
                    background: "linear-gradient(0deg, #c375ff, #59c7ff)",
                    background:
                      "-webkit-linear-gradient(0deg, #c375ff, #59c7ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  &lt;Ali Sher Khan&gt;
                </span>
              </Typography>
              <Box
                sx={{
                  display: extendedNav ? "flex" : "none",
                  width: "content-fit",
                }}
              >
                {navItems.map((item) => (
                  <NavbarBtn
                    key={item.title}
                    title={item.title}
                    tag={item.tag}
                  />
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Fade>

      <MobileDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navItems={navItems}
      />
    </Box>
  );
}

export default Navbar;
