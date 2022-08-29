import React from "react";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoAppsOutline,
  IoPersonCircleOutline,
  IoSearchOutline,
} from "react-icons/io5";

import "./topNavigation.css";

const TopNavigation = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <IoFilterCircleOutline className="io-icon io-icon30" />
          <h3 className="logo">MenXP</h3>
        </div>

        <div className="middle">
          <input type="text" className="input-searchbar" placeholder="search" />
          <IoSearchOutline className="io-icon io-search-icon" />
        </div>

        <div className="right">
          <IoAppsOutline className="io-icon io-icon25" />
          <IoNotificationsOutline className="io-icon io-icon25" />
          <IoPersonCircleOutline className="io-icon io-icon30" />
        </div>
      </div>
    </>
  );
};

export default TopNavigation;
