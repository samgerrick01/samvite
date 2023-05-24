import React from "react";
import "./Toggle.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Toggle = ({ setDarkMode, darkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <FaMoon />
      <FaSun />
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
