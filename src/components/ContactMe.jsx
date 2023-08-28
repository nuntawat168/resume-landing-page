import React from "react";
import "../css/ContentStyle.css";
import "../css/ContactMeStyle.css";

import githubLogo from "../assets/content/github-logo.svg";
import instagramLogo from "../assets/content/instagram-logo.svg";
import emailLogo from "../assets/content/e-mail-logo.svg";
import telephoneLogo from "../assets/content/telephone-logo.svg";

function ContactMe() {
  const githubProfileURL = "https://github.com/nuntawat168";
  const instagramProfileURL = "https://www.instagram.com/ice.nuntaw/";

  return (
    <div className="content-wrapper" id="contact">
      <div className="content-title-wrapper">
        <p className="content-title-text-1">Contact</p>
        <p className="content-title-text-2">Me</p>
      </div>
      <div className="contact-me-box-wrapper">
        <a
          href={githubProfileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-me-box">
            <img src={githubLogo} alt="github logo" />
            <p className="contact-title">Github</p>
          </div>
        </a>

        <a
          href={instagramProfileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-me-box">
            <img src={instagramLogo} alt="instagram logo" />
            <p className="contact-title">Instagram</p>
          </div>
        </a>

        <div
          className="contact-me-box"
          onClick={() => {
            alert("Email: nuntawat_168@outlook.com");
          }}
        >
          <img src={emailLogo} alt="e-mail logo" />
          <p className="contact-title">Email</p>
        </div>

        <div
          className="contact-me-box"
          onClick={() => {
            alert("Call: (+66)92-920-0081");
          }}
        >
          <img src={telephoneLogo} alt="telephone logo" />
          <p className="contact-title">Telp</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
