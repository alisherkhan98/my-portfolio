import { ThemeProvider } from "@mui/material";
// MUI
import { theme } from "./theme";
// router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import ContactMe from "./components/contact-me/ContactMe";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Sidebar />
        <Hero />
        <AboutMe />
        <Skills />
        <Work />
        <ContactMe />
      </ThemeProvider>
    </>
  );
}

export default App;
