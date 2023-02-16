import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// images
import meditate from "../../images/meditate.jpeg";
import impact from "../../images/impact.jpeg";
import hn from "../../images/hackernews.jpg";
import jsbasic from "../../images/jsbasic.jpg";
import portfolio from "../../images/portfolio.jpg";

import WorkCard from "../work-card/WorkCard";
const projects = [
  {
    name: "Impact",
    imageUrl: impact,
    githubUrl: "https://github.com/alisherkhan98/frontend-final-project",
    demoUrl: "https://impactreactapp.netlify.app/",
    skills: ["React JS, Firebase, Stripe"],
  },
  {
    name: "Medit8",
    imageUrl: meditate,
    githubUrl: "https://github.com/alisherkhan98/react-meditation-app",
    demoUrl: "https://medit8reactapp.netlify.app/",
    skills: ["React JS, Firebase"],
  },
  {
    name: "Hacker News",
    imageUrl: hn,
    githubUrl: "https://github.com/alisherkhan98/javascript-advanced",
    demoUrl: "https://hackernewsjs.netlify.app/",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "JS Counter",
    imageUrl: jsbasic,
    githubUrl: "https://github.com/alisherkhan98/Javascript-counter",
    demoUrl: "https://jsbasiccounter.netlify.app/",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "My portfolio",
    imageUrl: portfolio,
    githubUrl: "",
    skills: ["HTML", "CSS", "Scss"],
  },
];
function Work() {
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
      id="mywork"
    >
      <Container maxWidth="lg">
        <Typography textAlign="left" variant="h4" mb={3}>
          My Work
        </Typography>
        <Typography textAlign="left" variant="body1" sx={{ mb: 3 }}>
          What better way is there to know my &lt;
          <span style={{ color: "#569cd6" }}>abilities</span>&gt; than taking a
          look at my work by yourself?
        </Typography>
        <Typography
          textAlign="left"
          variant="body1"
          sx={{ mb: { xs: 8, lg: 15 } }}
        >
          In this section you can see the live demo of some of my recent
          projects and the relative{" "}
          <span style={{ color: "#c586c0" }}>source code</span> on github
        </Typography>
        <Grid container spacing={7} sx={{ mb: { xs: 8, lg: 15 } }}>
          {projects.map((project) => (
            <WorkCard
              title={project.name}
              key={project.name}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              skills={project.skills}
              demoUrl={project.demoUrl}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Work;
