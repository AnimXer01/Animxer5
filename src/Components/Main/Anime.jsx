import { Stack, Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Anime = ({ animes, isSearch }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      sx={{
        padding: { xs: "5px 10px", md: "5px 20px" },
        gap: { xs: "20px", md: "30px" },
        justifyContent: { xs: "start", md: "center" },
      }}
    >
      {animes.map((anime) => (
        <Box
          key={anime.title}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Link
            to={`info/${anime.id}`}
            title={anime.title}
            className="anime-link"
          >
            <CardMedia
              component="img"
              image={anime.image}
              alt={anime.title}
              sx={{
                width: { xs: "130px", md: "150px" },
                height: "200px",
                borderRadius: "5px",
              }}
            ></CardMedia>
            <Typography
              variant="subtitle2"
              sx={{
                width: { xs: "130px", md: "150px" },
                wordWrap: "break-word",
                textAlign: "center",
                margin: "5px 0",
                height: "20px",
                overflow: "hidden",
              }}
            >
              {anime.title}
            </Typography>
          </Link>
          {!isSearch && (
            <Link className="episode-link">
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  width: { xs: "130px", md: "150px" },
                }}
              >
                Episode {anime.episodeNumber}
              </Typography>
            </Link>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Anime;