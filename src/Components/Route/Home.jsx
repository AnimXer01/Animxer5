import { Box, Button, Typography, Pagination } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { makeRequest } from "../../Utils/request";

const Home = () => {
  let { page } = useParams();
  page = page ? page.replace(/^page=/, "") : null;
  page = parseInt(page);
  const { query } = useParams();

  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [maxPages, setMaxPages] = useState(page ? page : 1);

  const location = useLocation();
  const isSearching = location.pathname.includes("/search/");

  const handleChangePage = (event, value) => {
    navigate(`/page=${value}`);
  };

  useEffect(() => {
    setAnimes([]);
    makeRequest(`/recent-episodes?page=${page ? page : 1}`).then((res) => {
      if (res?.data?.hasNextPage) {
        setMaxPages(maxPages + 1);
      }
      setAnimes(res?.data?.results ? res?.data?.results : []);
    });
  }, [query, location, page]);

  console.log(animes);
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
        {isSearching && (
          <Typography
            variant="subtitle1"
            sx={{
              color: "var(--primary-color)",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Search Result
          </Typography>
        )}
        <Box>
          <Button
            className={`anime-link ${
              location.pathname === "/" ? `active` : ``
            }`}
            href="/"
          >
            Recents
          </Button>
          <Button
            className={`anime-link ${
              location.pathname === "/top" ? `active` : ``
            }`}
            href="/top"
          >
            Top
          </Button>
          <Button
            className={`anime-link ${
              location.pathname === "/latest-episodes" ? `active` : ``
            }`}
            href="/latest-episodes"
          >
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
      <Pagination
        count={maxPages}
        shape="rounded"
        color="secondary"
        className="pagination-custom"
        onChange={handleChangePage}
        page={page ? page : 1}
      />
    </Box>
  );
};

export default Home;
