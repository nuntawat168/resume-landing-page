import React from "react";
import "../css/FooterStyle.css";

import footerVector from "../assets/footer/footer-vector.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <p className="design-by-text">Design By Rauliqbal</p>
      <img src={footerVector} className="footer-vector" alt="footer vector" />
    </div>
  );
}

export default Footer;
