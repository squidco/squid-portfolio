import React from "react";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Resume from "../../assets/Anthony_Pillow_Current_Resume.pdf";


export default function NavControls() {
  // renders the nav controls by checking the screen's size
  // if it is greater than 480px it returns several buttons on the nav bar
  // if it is smaller than 480px it returns a hamburger menu which slides out from the side of the screen
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  if (width > 480) {
    return (
      <div>
        <a className="nav-links" href="#about">
          About
        </a>
        <a className="nav-links" href="#projects">
          Projects
        </a>
        <a className="nav-links" href="#resume">
          Resume
        </a>
        <a className="nav-links" href="#contact">
          Contact
        </a>
        <a href={Resume} download className="nav-links">
            <FontAwesomeIcon icon={faDownload} />  Resume
          </a>
      </div>
    );
  } else {
    return <Hamburger />;
  }
}
