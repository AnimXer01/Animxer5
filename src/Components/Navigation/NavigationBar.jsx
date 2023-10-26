import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import modules from "../../base.module.css";
import { SearchBar } from "../";

const NavigationBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: {
          xs: "0 20px",
          md: "0 100px",
          alignItems: "center",
          height: "60px",
          borderBottom: "1px solid #fff1",
          position: "fixed",
          top: "0",
          width: "100%",
        },
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
      <Box>
        <Button
          href="latest"
          className={`${modules.highlight}`}
          sx={{
            textTransform: "capitalize",
            color: "var(--primary-color)",
            opacity: 0.7,
          }}
        >
          <Typography>Top</Typography>
        </Button>
        <Button
          href="latest"
          className={`${modules.highlight}`}
          sx={{
            textTransform: "capitalize",
            color: "var(--primary-color)",
            opacity: 0.7,
          }}
        >
          <Typography>Latest</Typography>
        </Button>
      </Box>
      <SearchBar />
    </Box>
  );
};

export default NavigationBar;
