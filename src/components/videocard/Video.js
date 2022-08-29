import React from "react";
import "./video.css";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  return (
    <div className="item">
      <div className="image-container">
      <Link to={`/product/${video._id}`}><img src={video.thumbnailUrl} alt={video.title} /></Link>
      </div>
      <div className="details-container">
        <div className="channel-image">
          <img src={video.channelImageUrl} alt="channel" />
        </div>
        <div className="video-details">
          <p className="title">{video.title}</p>
          <span className="channel-name">{video.channelName}</span>
          <div className="views-and-date">
            <span className="views">23.5M views </span>
            <span className="uploadTime">3 weeks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
