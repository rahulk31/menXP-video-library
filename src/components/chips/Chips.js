import React from "react";
import "./chips.css";

const Chips = () => {
  return (
    <>
      <div className="chips-wrapper">
        <ul className="chips-list">
          <li className="active-chip">All</li>
          <li>Music</li>
          <li>Clothing</li>
          <li>Fitness</li>
          <li>Comedy</li>
          <li>Grooming</li>
          <li>Coding</li>
          <li>Gaming</li>
          <li>Dating</li>
          <li>Sports</li>
          <li>Cricket</li>
          <li>Computers</li>
          <li>Events</li>
          <li>Vlogs</li>
        </ul>
      </div>
    </>
  );
};

export default Chips;
