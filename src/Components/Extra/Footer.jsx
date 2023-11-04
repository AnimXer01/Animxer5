import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      background: "#fff1",
      color: "var(--primary-color)",
      borderRadius: "10px",
      padding: "10px 12px",
      margin: "10px 0",
      opacity: "0.7",
    }}
  >
    <Typography variant="subtitle2">
      © AnimeSensei 2023. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
