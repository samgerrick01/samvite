import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Intro darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Works darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Testimonial darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
