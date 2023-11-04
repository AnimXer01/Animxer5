import { Box, Typography, CardMedia, Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
import { makeRequest } from "../../Utils/request";
import { Episodes } from "../";

const AnimeInfo = () => {
  const location = useLocation();
  const [animeInfo, setAnimeInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    makeRequest(`/info/${id}`, "GET").then((res) => setAnimeInfo(res?.data));
  }, [id]);

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
        <Typography
          variant="subtitle2"
          sx={{
            color: "var(--primary-color)",
            textTransform: "uppercase",
            fontWeight: "500",
            letterSpacing: "1px",
            margin: "0 10px",
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
            sx={{ fontSize: "80%" }}
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
            sx={{ fontSize: "80%" }}
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
              marginTop: "10px",
            }}
          >
            <Typography
              textAlign="center"
              sx={{
                fontSize: { xs: "80%", sm: "18px", md: "22px" },
              }}
            >
              {animeInfo.title}
            </Typography>
            <Typography
              variant="subtitle2"
              backgroundColor={
                animeInfo.subOrDub === "sub" ? "orange" : "green"
              }
              sx={{
                textTransform: "uppercase",
                padding: "3px 12px",
                borderRadius: "5px",
                margin: "0 3px",
                display: { xs: "none", sm: "flex", md: "flex" },
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
              wordBreak: "break-all",
              fontSize: { xs: "8px", sm: "10px", md: "12px" },
            }}
          >
            {animeInfo.otherName}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "13px", md: "15px" },
              marginTop: "5px",
            }}
          >
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
            variant="subtitle1"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            Description: <br />
          </Typography>
          <Typography
            className="scrollbar-hidden"
            variant="subtitle1"
            sx={{
              maxHeight: "165px",
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
          variant="subtitle2"
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            fontWeight: 400,
          }}
        >
          Summary: <br />
        </Typography>
        <Typography
          className="custom-scrollbar"
          sx={{
            maxHeight: "95px",
            overflowY: "auto",
            margin: { xs: "0", md: "0 15px" },
            marginBottom: "10px",
            display: { xs: "block", sm: "block", md: "none" },
            fontWeight: "300",
            padding: "5px",
            fontSize: "12px",
          }}
        >
          {animeInfo.description}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 400,
          color: "var(--primary-color)",
          fontSize: { xs: "15px", sm: "18px", md: "20px" },
          margin: { xs: "5px", md: "0 10px" },
        }}
      >
        Episodes: <br />
      </Typography>
      <Episodes episodes={animeInfo?.episodes} />
    </Box>
  );
};

export default AnimeInfo;
