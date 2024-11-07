import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import ThemeToggle from "../components/ThemeToggle";
import NavControls from "../components/NavControls/NavControls";
import Resume from "../assets/Anthony_Pillow_Resume.pdf";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  const githubURL = "https://github.com/squidco";

  // Set page theme
  const [theme, setTheme] = useState();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  function handleThemeToggle() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div className="app min-h-screen" data-theme={theme}>
      <div className="splotch"></div>
      <header>
        <Nav>
          <NavControls>
            <NavLink className={"nav-links"} to={"/about"}>About</NavLink>
            <a className="nav-links" href="#projects">
              Projects
            </a>
            <a href={Resume} download className="nav-links">
              <FontAwesomeIcon icon={faDownload} /> Resume
            </a>
            <ThemeToggle toggle={handleThemeToggle} />
          </NavControls>
        </Nav>
      </header>
      
        <Outlet />
      
      <footer className="flex relative text-center content-center items-center flex-col py-12 mt-5">
        <h1 className="outline">Contact Me</h1>
        <div className="social-links-container">
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> anthonypillow18@gmail.com
            </span>
          </p>
          <p>
            <span>
              <a href={githubURL} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
