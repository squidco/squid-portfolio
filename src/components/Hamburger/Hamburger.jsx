import React, { useState } from "react";
import "./Hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Resume from "../../assets/Anthony_Pillow_Current_Resume.pdf";


export default function Hamburger({ children }) {
  // renders a button on the nav bar and a menu off screen that when the button is pressed
  // slides in from the right side
  // slide in is done with css
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-button"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <FontAwesomeIcon style={{ height: "2rem" }} icon={faBars} />
      </button>

      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <button
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            margin: "2rem",
          }}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <FontAwesomeIcon style={{ height: "2rem" }} icon={faX} />
        </button>
        <a onClick={() => setOpen((prevState) => !prevState)} href="#about">
          About
        </a>
        <a onClick={() => setOpen((prevState) => !prevState)} href="#projects">
          Projects
        </a>
        <a onClick={() => setOpen((prevState) => !prevState)} href="#resume">
          Resume
        </a>
        <a onClick={() => setOpen((prevState) => !prevState)} href="#contact">
          Contact
        </a>
        <a href={Resume} download className="nav-links">
            <FontAwesomeIcon icon={faDownload} />  Resume
          </a>
      </div>
    </>
  );
}
