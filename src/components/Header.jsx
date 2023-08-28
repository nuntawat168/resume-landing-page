import React from "react";
import NavBar from "./NavBar.jsx";
import "../css/HeaderStyle.css";

import ellipse1 from "../assets/background/Ellipse-1.svg";
import ellipse2 from "../assets/background/Ellipse-2.svg";
import ellipse3 from "../assets/background/Ellipse-3.svg";
import heroImg from "../assets/header/heroImg.svg";

function Header() {
  return (
    <>
      <NavBar />
      <div className="header-wrapper" id="about">
        <div className="introduce-wrapper">
          <p className="greeting-text">
            Sawadee
            <img
              src={ellipse1}
              className="background-ellipse-1"
              alt="ellipse 1"
            />
          </p>
          <p className="name-and-role-text">
            I'm Nantawat Maliwan <br />a Full-Stack Developer
          </p>
          <p className="introduce-myself">
            Full-Stack developer based in Bangkok, Thailand. <br />I code with a
            focus on cleanliness, precision, and <br />
            continuous learning.
            <img
              src={ellipse2}
              className="background-ellipse-2"
              alt="ellipse 2"
            />
          </p>
        </div>
        <div className="logo-brand-wrapper">
          <img src={heroImg} className="logo-brand" alt="hero image" />
          <img
            src={ellipse3}
            className="background-ellipse-3"
            alt="ellipse 3"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
