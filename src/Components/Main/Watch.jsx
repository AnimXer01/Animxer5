import Hls from "hls.js";
import { Box, Typography, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeRequest } from "../../Utils/request";

const Watch = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState([]);
  const [currentServer, setCurrentServer] = useState("vidstreaming");
  const [quality, setQuality] = useState("720p");

  useEffect(() => {
    makeRequest(`/watch/${episodeId}`, "GET", { server: currentServer }).then(
      (res) => setEpisode(res?.data)
    );
  }, [episodeId]);

  useEffect(() => {
    var url = "";
    episode?.sources?.map((source) => {
      if (source.quality === quality) {
        url = source.url;
      }
    });
    const video = document.querySelector("#video-player");
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, [episode]);

  return (
    <Box sx={{ background: "#fff1", minHeight: "80vh", borderRadius: "10px" }}>
      <CardMedia
        component="video"
        controls
        autoPlay
        height="auto"
        key={`${episodeId}-${quality}`}
        id="video-player"
      />
    </Box>
  );
};

export default Watch;
