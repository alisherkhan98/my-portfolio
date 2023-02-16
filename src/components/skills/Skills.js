import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SkillCard from "../skillCard/SkillCard";
// images
import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import sassLogo from "../../images/sass.png";
import jsLogo from "../../images/js.png";
import reactLogo from "../../images/react.png";
import reduxLogo from "../../images/redux.png";
import bootstrapLogo from "../../images/bootstrap.png";
import muiLogo from "../../images/mui.png";
import tsLogo from "../../images/typescript.png";
import angularLogo from "../../images/angular.png";
import firebaseLogo from "../../images/firebase.png";

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
    name: "Sass/Scss",
    image: sassLogo,
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
  {
    name: "Firebase",
    image: firebaseLogo,
  },
];

function Skills() {
  return (
    <Box
      sx={{
        py: 15,
        px: { xs: "30px", sm: "100px" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="skills"
    >
      <Container maxWidth="lg" sx={{ p: "0 !important" }}>
        <Typography textAlign="center" variant="h4" mb={3}>
          Skills
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          sx={{ mb: { xs: 8, lg: 15 } }}
        >
          Here are some of the{" "}
          <span style={{ color: "#9cdcfe" }}>languages</span> and &lt;
          <span style={{ color: "#4ec9bc" }}>Frameworks</span>&#x2F;&gt; I have
          learned and used for my projects
        </Typography>
        <Grid container spacing={5} sx={{ mb: 10 }}>
          {skills.map((item) => (
            <SkillCard key={item.name} url={item.image} title={item.name} />
          ))}
        </Grid>
        <Typography textAlign="center" variant="body1">
          And soon I will add more to the list!
        </Typography>
      </Container>
    </Box>
  );
}

export default Skills;
