import React from "react";
import TopNavigation from "../../components/navigation/TopNavigation.js";
import LeftNavigation from "../../components/navigation/LeftNavigation.js";
import VideoList from "../../components/videoList/VideoList.js";

import "./homepage.css";
import Chips from "../../components/chips/Chips.js";

const Homepage = () => {
  return (
    <>
      <TopNavigation />
      <div className="leftNav-and-videoList">
        <div className="homepage-left">
          <LeftNavigation />
        </div>
        <div className="homepage-right">
          <Chips />
          <VideoList />
        </div>
      </div>
    </>
  );
};

export default Homepage;
