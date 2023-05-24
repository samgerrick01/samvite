import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>desilva.sam17.sgds@gmail.com</span>
        <div className="f-icons">
          <FaInstagram color="white" size={"3rem"} />
          <FaFacebook color="white" size={"3rem"} />
          <FaGithub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
