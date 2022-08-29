import React from "react";
import "./singleVideoPage.css";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";
import TopNavigation from "../../components/navigation/TopNavigation";

import {
  IoThumbsUpSharp,
  IoThumbsDownSharp,
  IoShareSocial,
  IoAddCircle,
} from "react-icons/io5";

const SingleVideoPage = () => {
  const { videosDB } = useVideoContext();
  const { productId } = useParams();

  const video = videosDB.find((video) => video._id === productId);
  return (
    <>
      <TopNavigation />
      <div className="singlepage-main">
        <div className="singlepage-videoframe">
          <div className="singlepage-video-card">
            <iframe src={video.url} frameborder="0"></iframe>
          </div>
          <h1 className="singlepage-heading-1">{video.title}</h1>
          <div className="singlepage-data-and-actions">
            <div className="sp-views-and-date">
              <span className="sp-views">23.5M views </span>
              <span className="sp-uploadTime">3 weeks</span>
            </div>

            <div className="right">
              <IoThumbsUpSharp className="io-icon io-icon25" />
              <IoThumbsDownSharp className="io-icon io-icon25" />
              <IoShareSocial className="io-icon io-icon25" />
              <IoAddCircle className="io-icon io-icon25" />
            </div>
          </div>

          // TODO: Make Design for comment section and channel ino section with the subscribe /button
        </div>
        <div className="singlepage-suggestion-video">

          suggestion

          //TODO: extract category othe current video and display videos from the same category in this suggestion div.
        </div>
      </div>
    </>
  );
};

export default SingleVideoPage;
