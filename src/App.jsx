import { useState, useEffect } from "react";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import NavControls from "./components/NavControls/NavControls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Resume from "./assets/Anthony_Pillow_Current_Resume.pdf";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // state to store project objects to be rendered by the project container component
  const [projects] = useState([
    {
      title: "TGBL",
      image: "./assets/images/TGBL.png",
      repoURL: "https://github.com/SquidDOTjpeg/TGBL",
      deployedURL: "https://thegoodboylist.herokuapp.com/",
      description:
        "Was the sole designer and developer on a web app, created from scratch, for Dungeons and Dragons spell casters to alleviate some of the upkeep of tracking spell slots, spells, and other character information to improve the quality of gameplay and time management",
      technologiesUsed: [
        "React",
        "Mongo",
        "Node",
        "Express",
        "Bootstrap",
        "Mongoose",
        "Axios",
        "NPM",
        "Node",
      ],
    },
  ]);

  // Set page theme
  const [theme, setTheme] = useState();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  function handleThemeToggle() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light")
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <div className="app" data-theme={theme}>
      <header>
        <Nav>
          <NavControls>
            <a className="nav-links" href="#about">
              About
            </a>
            <a className="nav-links" href="#projects">
              Projects
            </a>
            <a className="nav-links" href="#contact">
              Contact
            </a>
            <a href={Resume} download className="nav-links">
              <FontAwesomeIcon icon={faDownload} /> Resume
            </a>
            <ThemeToggle toggle={handleThemeToggle} />
          </NavControls>
        </Nav>
      </header>
      <main>
        {/* === About Section === */}

        <ContentContainer id="about">
          <h1 className="outline">Hello there,</h1>
          <p>
            <span className="bold">I'm Anthony Pillow:</span> photographer, rock
            climber, and full stack web developer.
          </p>
          <p>
            I love working on{" "}
            <span className="big-text bold">BIG PROJECTS</span> as well as
            focusing on the{" "}
            <span className="thin italicized">tiny details</span>. Working on a
            team gives me motivation and energy to contribute to something
            bigger than my individual efforts could create.
          </p>
          <p>
            I have completed a 6 month web development boot camp and am going
            back to college in 2024 where I will be studying Computer Science.
            I've made this step because I have always loved games and want to
            give myself the skills to be able to work on them or any other
            projects that catch my eye.
          </p>
          <p>Below are my projects and how to contact me with any inquiries.</p>
        </ContentContainer>

        {/* === Projects Section === */}

        <ContentContainer id="projects">
          <h1 className="outline">Projects</h1>
          <ProjectContainer projectArray={projects} />
        </ContentContainer>

        {/* === Contact Section === */}

        <ContentContainer id="contact">
          <h1 className="outline">Contact Me</h1>
          <div className="social-links-container">
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> anthonypillow18@gmail.com
              </span>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faGithub} /> SquidDOTjpeg
              </span>
            </p>
          </div>
        </ContentContainer>
      </main>
    </div>
  );
}

export default App;
