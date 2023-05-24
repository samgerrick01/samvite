import React from "react";
import Toggle from "../Toggle/Toggle";
import ReactJS from "../../img/reactjs.png";
import JavaScript from "../../img/js.png";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = ({ setDarkMode, darkMode }) => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <img src={ReactJS} width={72} height={52} alt="" />
        <img src={JavaScript} width={72} height={42} alt="" />
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
