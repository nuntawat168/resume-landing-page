import React from "react";
import "../css/ContentStyle.css";
import "../css/SkillsStyle.css";

import frontendDevIcon from "../assets/content/font-end-dev-icon.svg";
import backendDevIcon from "../assets/content/back-end-dev-icon.svg";
import uxUiDesignIcon from "../assets/content/ux-ui-design-icon.svg";
import ellipse5 from "../assets/background/Ellipse-5.svg";
import ellipse4 from "../assets/background/Ellipse-4.svg";

function Skills() {
  return (
    <div className="content-wrapper" id="skills">
      <div className="content-title-wrapper">
        <p className="content-title-text-1">Additional</p>
        <p className="content-title-text-2">passions</p>
      </div>
      <div className="content-box-wrapper">
        <div className="content-box content-skill">
          <img
            src={frontendDevIcon}
            alt="font-end developer icon"
            className="skill-icon"
          />
          <div className="skill-title-wrapper">
            <p className="skill-title-1">Front-End</p>
            <p className="skill-title-2">Developer</p>
          </div>
          <p className="skill-detail">(HTML, CSS, Tailwind, React)</p>
          <img src={ellipse5} className="background-ellipse-5" />
        </div>
        <div className="content-box content-skill">
          <img
            src={backendDevIcon}
            alt="back-end developer icon"
            className="skill-icon"
          />
          <div className="skill-title-wrapper">
            <p className="skill-title-1">Back-End</p>
            <p className="skill-title-2">Developer</p>
          </div>
          <p className="skill-detail">(Node.js, Express.js, SQL)</p>
          <img src={ellipse4} className="background-ellipse-4" />
        </div>
        <div className="content-box content-skill">
          <img
            src={uxUiDesignIcon}
            alt="UI/UX designer icon"
            className="skill-icon"
          />
          <div className="skill-title-wrapper">
            <p className="skill-title-1">UI/UX</p>
            <p className="skill-title-2">Designer</p>
          </div>
          <p className="skill-detail">(Figma, Zeplin, Adobe XD)</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
