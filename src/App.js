import { useEffect, useState } from "react";
import { Box, Fade, ThemeProvider } from "@mui/material";
// MUI
import { theme } from "./theme";
// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import ContactMe from "./components/contact-me/ContactMe";
import Intro from "./components/intro/Intro";
// img
import bg from "./images/keyboard.jpg";
import myself from "./images/my-photo.png";
import useImagePreloader from "./hooks/useImagePreloader";

function App() {
  const [introOpen, setIntroOpen] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // preload hero images
  const { imagesPreloaded } = useImagePreloader([bg, myself]);

  useEffect(() => {
    if (!imagesPreloaded) {
      return;
    }
    setTimeout(() => {
      setIntroOpen(false);
    }, 3500);
    setTimeout(() => {
      setShowContent(true);
    }, 4000);
    setTimeout(() => {
      setShowNav(true);
    }, 5000);
    setTimeout(() => {
      setShowSidebar(true);
    }, 5000);
  }, [imagesPreloaded]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar showNav={showNav} />
        <Sidebar showSidebar={showSidebar} />
        <Fade in={showContent} timeout={1000}>
          <Box>
            <Hero />
            <AboutMe />
            <Skills />
            <Work />
            <ContactMe />
          </Box>
        </Fade>
        <Intro introOpen={introOpen} />
      </ThemeProvider>
    </>
  );
}

export default App;
