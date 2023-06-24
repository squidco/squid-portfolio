import React from "react";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";

export default function NavControls() {
  let navControl = [];
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
      </div>
    );
  } else {
    return (
      <Hamburger>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </Hamburger>
    );
  }
}
