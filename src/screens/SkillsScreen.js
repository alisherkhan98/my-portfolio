import React from "react";
// MUI
import { Box, Container, Grid, Typography } from "@mui/material";
// components
import SkillCard from "../components/skillCard/SkillCard";
// images
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import reduxLogo from "../images/redux.png";
import bootstrapLogo from "../images/bootstrap.png";
import muiLogo from "../images/mui.png";
import tsLogo from "../images/typescript.png";
import angularLogo from "../images/angular.png";

const skills = [
  {
    name: "HTML5",
    image: htmlLogo,
  },
  {
    name: "CSS3",
    image: cssLogo,
  },
  {
    name: "Bootstrap",
    image: bootstrapLogo,
  },
  {
    name: "Javascript ES6",
    image: jsLogo,
  },
  {
    name: "React JS",
    image: reactLogo,
  },
  {
    name: "Redux",
    image: reduxLogo,
  },
  {
    name: "Material UI",
    image: muiLogo,
  },
  {
    name: "Typescript",
    image: tsLogo,
  },
  {
    name: "Angular",
    image: angularLogo,
  },
];
function SkillsScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        ml: { sm: "48px" },
        px: 5,
        pt: { xs: "150px", lg: "200px" },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          variant="h5"
          sx={{ mb: { xs: 8, lg: 15 } }}
        >
          Here are some of the <span className="codeVar">languages</span> and
          &lt;
          <span className="componentTag">Frameworks</span>&#x2F;&gt; I have
          learned and used for my projects
        </Typography>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {skills.map((item) => (
            <SkillCard key={item.name} url={item.image} title={item.name} />
          ))}
        </Grid>
        <Typography textAlign="center" variant="h5" sx={{ mb: 15 }}>
          And soon I will add more to the list!
        </Typography>
      </Container>
    </Box>
  );
}

export default SkillsScreen;
