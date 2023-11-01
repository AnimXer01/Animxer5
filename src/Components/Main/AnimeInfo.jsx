import { Box, Typography, CardMedia, Button } from "@mui/material";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
import { makeRequest } from "../../Utils/request";

const AnimeInfo = () => {
  const location = useLocation();
  const [animeInfo, setAnimeInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    makeRequest(`/info/${id}`, "GET").then((res) => setAnimeInfo(res?.data));
  }, [id]);

  console.log(animeInfo);
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
        <Typography
          variant="subtitle2"
          sx={{
            color: "var(--primary-color)",
            textTransform: "uppercase",
            fontWeight: "500",
            letterSpacing: "1px",
            marginLeft: "10px",
          }}
        >
          Anime Info
        </Typography>
        <Box>
          <Button
            className={`anime-link ${
              location.pathname === "/" ||
              location.pathname.startsWith("/page=")
                ? `active`
                : ``
            }`}
            href="/"
          >
            Recents
          </Button>
          <Button
            className={`anime-link ${
              location.pathname === "/top" ||
              location.pathname.startsWith("/top?page=")
                ? `active`
                : ``
            }`}
            href="/top"
          >
            Top
          </Button>
          <Button
            className={`anime-link ${
              location.pathname === "/latest-anime" ||
              location.pathname.startsWith("/latest-anime?page=")
                ? `active`
                : ``
            }`}
            href="/latest-anime"
          >
            Latest Animes
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "grid", md: "block" },
            gridTemplateColumns: "50% 50%",
          }}
        >
          <Button className="social-link" startIcon={<FacebookIcon />} />
          <Button className="social-link" startIcon={<GitHubIcon />} />
          <Button className="social-link" startIcon={<EmailIcon />} />
          <Button className="social-link" startIcon={<TwitterIcon />} />
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={animeInfo.image}
          alt={animeInfo.title}
          sx={{
            height: "auto",
            width: { xs: "230px", md: "350px", sm: "300px" },
            borderRadius: "5px",
            margin: "10px",
          }}
        />
        <Box
          sx={{
            width: "100%",
            color: "var(--primary-color)",
            marginRight: { xs: "15px", md: "0" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ margin: "10px 0" }}
            >
              {animeInfo.title}
            </Typography>
            <Typography
              variant="subtitle1"
              backgroundColor={
                animeInfo.subOrDub === "sub" ? "orange" : "green"
              }
              sx={{
                textTransform: "uppercase",
                padding: "3px 12px",
                borderRadius: "5px",
                margin: "0 3px",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              {animeInfo.subOrDub}
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              width: "100%",
              textAlign: "center",
              opacity: "0.7",
              margin: "0 10px",
              wordBreak: "break-all",
            }}
          >
            {animeInfo.otherName}
          </Typography>
          <Typography variant="subtitle1">
            Released: {animeInfo.releaseDate}
          </Typography>
          <Typography variant="subtitle1">Type: {animeInfo.type}</Typography>
          <Typography variant="subtitle1">
            Genre:
            {animeInfo?.genres?.map((genre, index) => {
              if (index === 0) {
                return ` ${genre}`;
              } else {
                return ` - ${genre}`;
              }
            })}
          </Typography>
          <Typography variant="subtitle1">
            Status: {animeInfo.status}
          </Typography>
          <Typography variant="subtitle1">
            Episodes: {animeInfo.totalEpisodes}
          </Typography>
          <Typography variant="h6">
            Description: <br />
          </Typography>
          <Typography
            className="scrollbar-hidden"
            variant="subtitle1"
            sx={{
              maxHeight: "200px",
              overflowY: "auto",
              margin: { xs: "0", md: "0 15px" },
              marginBottom: "10px",
            }}
          >
            {animeInfo.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimeInfo;
