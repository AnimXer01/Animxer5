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
            width: { xs: "50px", md: "auto" },
            textAlign: { xs: "center" },
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
            height: { xs: "150px", md: "350px", sm: "300px" },
            width: { xs: "150px", md: "350px", sm: "300px" },
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
              variant={{ xs: "subtitle1", sm: "h6", md: "h5" }}
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
            sx={{
              width: "100%",
              textAlign: "center",
              opacity: "0.7",
              margin: "0 10px",
              wordBreak: "break-all",
              fontSize: { xs: "10px", sm: "13px", md: "15px" },
            }}
          >
            {animeInfo.otherName}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", sm: "13px", md: "15px" } }}>
            Released: {animeInfo.releaseDate}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", sm: "13px", md: "15px" } }}>
            Type: {animeInfo.type}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", sm: "13px", md: "15px" } }}>
            Genre:
            {animeInfo?.genres?.map((genre, index) => {
              if (index === 0) {
                return ` ${genre}`;
              } else {
                return ` - ${genre}`;
              }
            })}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", sm: "13px", md: "15px" } }}>
            Status: {animeInfo.status}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", sm: "13px", md: "15px" } }}>
            Episodes: {animeInfo.totalEpisodes}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
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
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            {animeInfo.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: "var(--primary-color)",
          padding: "5px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        >
          Description: <br />
        </Typography>
        <Typography
          className="scrollbar-hidden"
          variant="subtitle2"
          sx={{
            maxHeight: "95px",
            overflowY: "hidden",
            margin: { xs: "0", md: "0 15px" },
            marginBottom: "10px",
            display: { xs: "block", sm: "block", md: "none" },
            fontWeight: "500",
            padding: "5px",
          }}
        >
          {animeInfo.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimeInfo;
