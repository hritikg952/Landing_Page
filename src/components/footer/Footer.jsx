import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footerLinks">
        <ul>
          <a href="#">HOME</a>
          <a href="#">COUPLE</a>
          <a href="#">INVITATION</a>
          <a href="#">ALBUM</a>
          <a href="#">FRIENDS SAY</a>
          <a href="#">GIFT</a>
        </ul>
      </div>
      <br style={{ color: "#676767" }} />
      <div className="footerSocialLinks">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p style={{color:"#676767",fontWeight: "500",fontSize: "1.2rem"}}>© 2019 Unice Powered By Pixelstrap</p>
    </div>
  );
}

export default Footer;
