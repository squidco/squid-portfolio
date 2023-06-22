import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <p>AP</p>

      <Hamburger>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </Hamburger>
    </div>
  );
}
