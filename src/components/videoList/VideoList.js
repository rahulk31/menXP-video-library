import React from "react";

import "./videoList.css";

import Video from "../videocard/Video";
import { useVideoContext } from "../../context/video-context";

const VideoList = () => {
  const { videosDB } = useVideoContext();
  

  return (
    <div className="video-container">
      {videosDB.map((video) => (
        <Video video={video} key={video._id} />
      ))}
    </div>
  );
};

export default VideoList;
