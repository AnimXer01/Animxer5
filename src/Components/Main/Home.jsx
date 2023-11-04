import { Box, Button, Typography, Pagination } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { makeRequest } from "../../Utils/request";
import { Anime, Footer } from "../";

const Home = () => {
  let { page } = useParams();
  page = page
    ? page.replace(
        /^\/?(top&page=|latest-anime&page=|search\/\w+&page=|page=)/,
        ""
      )
    : null;
  page = parseInt(page);

  const { query } = useParams();

  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [maxPages, setMaxPages] = useState(page ? page : 1);
  const [type, setType] = useState(1);

  const location = useLocation();
  const isSearching = location.pathname.includes("/search/");

  const handleChangePage = (event, value) => {
    navigate(
      `${
        location.pathname.startsWith("/top")
          ? "/top&"
          : location.pathname.startsWith("/latest-anime")
          ? "/latest-anime&"
          : location.pathname.startsWith("/search/")
          ? `/search/${query}/`
          : ""
      }page=${value}`
    );
  };

  useEffect(() => {
    setAnimes([]);
    if (
      (!query && location.pathname.startsWith("/top")) ||
      location.pathname.startsWith("/top&page=")
    ) {
      makeRequest(`/top-airing`, "GET", {
        page: page ? page : 1,
        type: type,
      }).then((res) => {
        console.log(res);
        if (res?.data?.hasNextPage) {
          setMaxPages(maxPages + 1);
        }
        setAnimes(res?.data?.results ? res?.data?.results : []);
        return;
      });
    } else if (query) {
      makeRequest(`/${query}`, "GET", {
        page: page ? page : 1,
        type: type,
      }).then((res) => {
        if (res?.data?.hasNextPage) {
          setMaxPages(maxPages + 1);
        }
        setAnimes(res?.data?.results ? res?.data?.results : []);
        return;
      });
    } else {
      makeRequest(`/recent-episodes`, "GET", {
        page: page ? page : 1,
        type: type,
      }).then((res) => {
        if (res?.data?.hasNextPage) {
          setMaxPages(maxPages + 1);
        }
        setAnimes(res?.data?.results ? res?.data?.results : []);
        return;
      });
    }
  }, [query, location, page, type]);

  return (
    <Box sx={{ background: "#fff1", minHeight: "80vh", borderRadius: "10px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #fff1",
          padding: { xs: "3px 10px", md: "10px" },
        }}
      >
        {isSearching && (
          <Typography
            variant="subtitle2"
            sx={{
              color: "var(--primary-color)",
              textTransform: "uppercase",
              fontWeight: "500",
              width: { xs: "50px", md: "auto" },
              textAlign: { xs: "center" },
            }}
          >
            Search Result
          </Typography>
        )}
        <Box>
          <Button
            className={`anime-link ${
              location.pathname === "/" ||
              location.pathname.startsWith("/page=")
                ? `active`
                : ``
            }`}
            href="/AnimeSensei"
          >
            Recents
          </Button>
          <Button
            className={`anime-link ${
              location.pathname === "/top" ||
              location.pathname.startsWith("/top&page=")
                ? `active`
                : ``
            }`}
            href="/AnimeSensei/top"
          >
            Top
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "grid", md: "flex" },
            gridTemplateColumns: "50% 50%",
          }}
        >
          <Button className="social-link" startIcon={<FacebookIcon />} />
          <Button className="social-link" startIcon={<GitHubIcon />} />
          <Button className="social-link" startIcon={<EmailIcon />} />
          <Button className="social-link" startIcon={<TwitterIcon />} />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: { xs: "center" },
            marginTop: "10px",
            marginLeft: { xs: "0", md: "10px" },
            scale: { xs: "0.9" },
          }}
        >
          {location.pathname !== "/top" &&
            !location.pathname.startsWith("/top&page=") &&
            !isSearching && (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setType(1)}
                >
                  JP Sub
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setType(2)}
                >
                  Eng Dub
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setType(3)}
                >
                  Chinese
                </Button>
              </>
            )}
        </Box>
        <Pagination
          count={maxPages + 2}
          shape="rounded"
          color="secondary"
          className="pagination-custom"
          onChange={handleChangePage}
          page={page ? page : 1}
        />
      </Box>
      <Anime
        animes={animes}
        isSearch={
          query ||
          location.pathname === "/latest-anime" ||
          location.pathname.startsWith("/latest-anime?page=") ||
          location.pathname === "/top" ||
          location.pathname.startsWith("/top&page=")
            ? true
            : false
        }
      />
      <Pagination
        count={maxPages + 2}
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
