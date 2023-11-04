import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "../";

const NavigationBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
        alignItems: "center",
        height: "60px",
        width: "100%",
      }}
    >
      <Link to="/">
        <Typography
          variant="h6"
          sx={{ color: "var(--primary-color)", fontWeight: 550 }}
        >
          AnimeSensei
        </Typography>
      </Link>
      <SearchBar />
    </Box>
  );
};

export default NavigationBar;
