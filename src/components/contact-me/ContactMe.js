import React from "react";
// MUI
import { Box, Link, Typography } from "@mui/material";
import MyButton from "../../atoms/MyButton";
import MobileSocials from "../mobile-socials/MobileSocials";
function ContactMe() {
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
      id="contactme"
    >
      <Box sx={{ maxWidth: 700, mb: 5 }}>
        <Typography variant="h4" mb={3}>
          Contact me
        </Typography>
        <Typography variant="body1" mb={3}>
          Currently I am looking for new{" "}
          <span style={{ color: "#569cd6" }}>{"{"}</span>
          <span style={{ color: "#9cdcfe" }}>work opportunities</span>
          <span style={{ color: "#569cd6" }}>{"}"}</span> so I would be happy to
          be contacted!
        </Typography>
        <Typography variant="body1" mb={3}>
          You can get in touch with me on any of my{" "}
          <span style={{ color: "#dcdcaa" }}>socials</span> displayed or send me
          an e-mail with the button below
        </Typography>
      </Box>
      <Link
        href="mailto: a.sher.khan982@gmail.com"
        underline="none"
        mb={5}
        sx={{ p: 0 }}
      >
        <MyButton variant="outlined">Send email</MyButton>
      </Link>
      <MobileSocials />
    </Box>
  );
}

export default ContactMe;
