import React, { useContext } from "react";
import "./Works.css";
import JavaScript from "../../img/js.png";
import Scss from "../../img/scss.png";
import ReactJS from "../../img/reactjs.png";
import Tailwind from "../../img/talwindcss.png";
import Vite from "../../img/vite.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = ({ darkMode }) => {
  // context

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={ReactJS} width={150} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Scss} width={150} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JavaScript} width={150} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Tailwind} width={150} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Vite} width={150} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
