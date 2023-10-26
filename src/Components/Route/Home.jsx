import { Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState(1);

  return (
    <Box sx={{ background: "#fff1", minHeight: "80vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #fff1",
          padding: "5px 10px",
        }}
      >
        <Box>
          <Button className="anime-link" href="/">
            Recents
          </Button>
          <Button className="anime-link" href="/top">
            Top
          </Button>
          <Button className="anime-link" href="/latest-episodes">
            Latest Episodes
          </Button>
        </Box>
        <Box>
          <Button className="social-link" startIcon={<FacebookIcon />} />
          <Button className="social-link" startIcon={<GitHubIcon />} />
          <Button className="social-link" startIcon={<EmailIcon />} />
          <Button className="social-link" startIcon={<TwitterIcon />} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
