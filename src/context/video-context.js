import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext({});

const VideoProvider = ({ children }) => {
  const [videosDB, setVideosDB] = useState([]);
  useEffect(() => {
    const callForVideos = async () => {
      try {
        const response = await axios.get(`/api/videos`);
        setVideosDB(response.data.videos);
      } catch (err) {
        console.error(err.message);
      }
    };

    callForVideos();
  }, []);
  return (
    <VideoContext.Provider value={{ videosDB }}>
      {" "}
      {children}{" "}
    </VideoContext.Provider>
  );
};


const useVideoContext = () => useContext(VideoContext);

export { VideoProvider, useVideoContext }
