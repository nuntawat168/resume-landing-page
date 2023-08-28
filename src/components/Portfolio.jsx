import React from "react";
import "../css/ContentStyle.css";
import "../css/PortfolioStyle.css";

import eSendpayLogo from "../assets/content/e-sendpay-project-logo.svg";
import eSendpayImage from "../assets/content/e-sendpay-project-img.svg";
import eSendpayEllipse from "../assets/content/e-sendpay-project-ellipse.svg";
import eCommerceLogo from "../assets/content/e-commerce-project-logo.svg";
import eCommerceImage from "../assets/content/e-commerce-project-img.svg";
import eCommerceEllipse from "../assets/content/e-commerce-project-ellipse.svg";
import beatsLearningLogo from "../assets/content/beats-learning-project-logo.svg";
import beatsLearningImage from "../assets/content/beats-learning-project-img.svg";
import beatsLearningEllipse from "../assets/content/beats-learing-ellipse.svg";

import ellipse6 from "../assets/background/Ellipse-6.svg";
import ellipse7 from "../assets/background/Ellipse-7.svg";

function Portfolio() {
  return (
    <div className="content-wrapper" id="portfolio">
      <div className="content-title-wrapper">
        <p className="content-title-text-1">My</p>
        <p className="content-title-text-2">Portfolio</p>
      </div>
      <div className="content-box-wrapper">
        <div className="content-box content-portfolio">
          <img
            src={eSendpayLogo}
            alt="e-sendpay project logo"
            className="project-logo"
          />
          <img
            src={eSendpayImage}
            alt="e-sendpay project image"
            className="project-img"
          />
          <img src={eSendpayEllipse} className="project-ellipse" />
          <img src={ellipse6} className="background-ellipse-6" />
        </div>
        <div className="content-box content-portfolio">
          <img
            src={eCommerceLogo}
            alt="e-commerce project logo"
            className="project-logo"
          />
          <img
            src={eCommerceImage}
            alt="e-commerce project image"
            className="project-img"
          />
          <img src={eCommerceEllipse} className="project-ellipse" />
        </div>
        <div className="content-box content-portfolio">
          <img
            src={beatsLearningLogo}
            alt="beats-learning project logo"
            className="project-logo"
          />
          <img
            src={beatsLearningImage}
            alt="beats-learning project image"
            className="project-img"
          />
          <img src={beatsLearningEllipse} className="project-ellipse" />
          <img src={ellipse7} className="background-ellipse-7" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
