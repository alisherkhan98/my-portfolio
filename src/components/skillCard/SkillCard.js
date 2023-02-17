import {
  Box,
  Fade,
  Grid,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";

function SkillCard({ url, title }) {
  const test = useMediaQuery("(min-width:400px)");

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

    setShow(false);
    window.addEventListener("scroll", cardTransition);
    return () => window.removeEventListener("scroll", cardTransition);
  }, []);
  return (
    <Grid item xs={test ? 6 : 12} sm={4} md={3} ref={cardRef}>
      <Fade in={show} timeout={1000}>
        <Stack direction="column" alignItems="center">
          <Box
            sx={{
              height: "80px",
              "&:hover": { transform: "scale(1.05)" },
              transition: "all .2s ease",
            }}
          >
            <img
              src={url}
              style={{
                height: "100%",
              }}
              alt=""
            />
          </Box>
          <Typography
            textAlign="center"
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              p: "16px",
              pb: "24px",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Fade>
    </Grid>
  );
}

export default SkillCard;
