import React from "react";
import "./Header.css";
import Toggle from "./Toggle";
import caption from "../images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={caption} alt="CaptionBuddy" style={{ width: "75px" }} ></img>
      <div>
      <h3>Caption Buddy</h3>
      </div>
      <Toggle />
    </header>
  );
};

export default Header;
