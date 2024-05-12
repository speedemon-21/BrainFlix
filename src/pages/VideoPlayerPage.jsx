// VideoPlayerPage.jsx
// Default video "id": "84e96018-4022-434e-80bf-000ce4cd12b8",

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video/Video";
import CommentsSection from "../components/CommentsSection/CommentsSection";
import NextVideoSection from "../components/NextVideoSection/NextVideoSection";
import axios from "axios";

const VideoPlayerPage = () => {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [nextVideos, setNextVideos] = useState([]);
  const { id } = useParams();
  const selectedVideoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  useEffect(() => {
    const getVideos = async () => {
      try {
        const [nextVideosResponse, selectedVideoResponse] = await Promise.all([
          axios.get(baseUrl + `videos?api_key=cc3d8f7e-5a6f-4cd0-ae88-f6745ccd6855`),
          axios.get(baseUrl + `videos/${selectedVideoId}?api_key=cc3d8f7e-5a6f-4cd0-ae88-f6745ccd6855`)
        ]);

        // Filter out the selected video from the list of next videos
        const filteredNextVideos = nextVideosResponse.data.filter(video => video.id !== selectedVideoId);

        setSelectedVideo(selectedVideoResponse.data);
        setNextVideos(filteredNextVideos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getVideos();
  }, [selectedVideoId, baseUrl]);

  return (
    <div>
      <Video selectedVideo={selectedVideo} />
      <CommentsSection selectedVideoDetails={selectedVideo} />
      <NextVideoSection nextVideos={nextVideos} />
    </div>
  );
};

export default VideoPlayerPage;
