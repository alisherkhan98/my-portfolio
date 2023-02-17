import React, { useRef, useState } from "react";
// MUI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";

function WorkCard({ imageUrl, title, skills, githubUrl, demoUrl }) {
  const [show, setShow] = useState(false);

  const cardRef = useRef(null);

  // listener for scroll
  React.useEffect(() => {
    function cardTransition() {
      if (
        cardRef.current?.getBoundingClientRect().top <=
        window.innerHeight - 100
      ) {
        setShow(true);
      }
    }

    window.addEventListener("scroll", cardTransition);
    return () => window.removeEventListener("scroll", cardTransition);
  }, []);
  return (
    <Fade in={show} timeout={1000}>
      <Grid item xs={12} sm={6} md={4} ref={cardRef}>
        <Card
          sx={{
            "&:hover": { transform: "scale(1.05)" },
            transition: "all .2s ease-in-out",
          }}
          elevation={5}
        >
          <Link href={demoUrl} target="_blank">
            <CardMedia
              sx={{
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                aspectRatio: "4/3",
              }}
              image={imageUrl}
            />
          </Link>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography
                textAlign="start"
                gutterBottom
                variant="body1"
                component="div"
                mb={0}
                sx={{ flexGrow: 1 }}
              >
                {title}
              </Typography>
              <Link
                href={demoUrl}
                target="_blank"
                underline="none"
                sx={{ p: 0 }}
              >
                <IconButton
                  sx={{
                    p: 0,
                    mx: 1,
                    color: "rgba(255,255,255,0.4)",
                    "& svg:hover": {
                      color: "#fff",
                      filter: "drop-shadow(0 0 5px #c375ff)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <RxOpenInNewWindow />
                </IconButton>
              </Link>
              <Link
                href={githubUrl}
                target="_blank"
                underline="none"
                sx={{ p: 0 }}
              >
                <IconButton
                  sx={{
                    p: 0,
                    mx: 1,
                    color: "rgba(255,255,255,0.4)",
                    "& svg:hover": {
                      color: "#fff",
                      filter: "drop-shadow(0 0 5px #c375ff)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <FiGithub />
                </IconButton>
              </Link>
            </Box>
            <Typography variant="body2" color="text.disabled">
              {skills.join(", ")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fade>
  );
}

export default WorkCard;
