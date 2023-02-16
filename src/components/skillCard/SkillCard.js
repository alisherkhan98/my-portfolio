import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

function SkillCard({ url, title }) {
  const test = useMediaQuery("(min-width:400px)");
  return (
    <Grid item xs={test ? 6 : 12} sm={4} md={3}>
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
    </Grid>
  );
}

export default SkillCard;
