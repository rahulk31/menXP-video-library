import React from "react";
import "./leftNavigation.css";

import {
  IoHomeOutline,
  IoCompassOutline,
  IoStopwatchOutline,
  IoTimerOutline,
  IoRadioOutline,
  IoHeartCircleOutline,
  IoAlbumsOutline,
  IoLanguageOutline,
  IoInformationCircleOutline,
  IoHelpCircleOutline,
  IoBugOutline,
  IoBagCheckOutline,
} from "react-icons/io5";

const LeftNavigation = () => {
  return (
    <>
      <ul className="left-nav">
        <li>
          <IoHomeOutline className="io-icon-left" /> <span>Home</span>
        </li>
        <li>
          <IoCompassOutline className="io-icon-left" /> <span>Explore</span>
        </li>
        <li>
          <IoStopwatchOutline className="io-icon-left" /> <span>History</span>
        </li>
        <li>
          <IoHeartCircleOutline className="io-icon-left" />
          <span>Liked Videos</span>
        </li>
        <li>
          <IoTimerOutline className="io-icon-left" /> <span>Watch Later</span>
        </li>
        <li>
          <IoAlbumsOutline className="io-icon-left" /> <span>Playlists</span>
        </li>
        <li>
          <IoBagCheckOutline className="io-icon-left" />{" "}
          <span>Subscriptions</span>
        </li>
        <li>
          <IoRadioOutline className="io-icon-left" /> <span>Go Live</span>
        </li>
        <li>
          <IoLanguageOutline className="io-icon-left" /> <span>Language</span>
        </li>
        <li>
          <IoInformationCircleOutline className="io-icon-left" />{" "}
          <span>Feedback</span>
        </li>
        <li>
          <IoHelpCircleOutline className="io-icon-left" /> <span>Help</span>
        </li>
        <li>
          <IoBugOutline className="io-icon-left" /> <span>Report Bug</span>
        </li>
      </ul>
    </>
  );
};

export default LeftNavigation;
