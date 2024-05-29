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
        "An app that assists Dungeons and Dragons spellcasters with tracking their spellslots. Created from scratch with Create React App and recently migrated to Vite.js.",
      technologiesUsed: [
        "React",
        "Mongo",
        "Node",
        "Express",
        "Bootstrap",
        "Mongoose",
        "Axios",
        "NPM",
        "Vite.js",
      ],
    },
    {
      title: "Curve Area Estimator",
      image: "./assets/images/CAE.png",
      repoURL: "https://github.com/SquidDOTjpeg/curve-area-estimator",
      deployedURL: "https://stupidrectangles.netlify.app/",
      description:
        "A fast way to estimate the area under a curve using an equation, domain, and the number of rectangles. Take the busy work out of Calculus 1!",
      technologiesUsed: ["React", "Node", "Tailwind CSS", "NPM", "Vite.js"],
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
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
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
          <img
            src="./assets/images/profile-picture.jpg"
            alt="A picture of a blonde guy who happens to be myself"
            className="profile-picture"
          />
          <p>
            <span className="bold">I&apos;m Anthony Pillow:</span> photographer,
            rock climber, gamer, and full stack web developer.
          </p>
          <p>
            I love coding because it is a chance to exercise my critical
            thinking and problem solving skills while creating a useful product.
            I also love working with a team because it galvanizes and emboldens
            those who are a part of it, allowing the team to tackle bigger
            issues. As Caesar says,{" "}
            <span className="bold">&quot;Apes Together Strong.&quot;</span>
          </p>
          <p>
            I have been a Instructional Specialist assisting a Web Development
            boot camp going on four years now. In that time I have offered my
            knowledge of Web Development and programming fundamentals to
            students who often are pursuing career changes. Now I have decided
            to pursue a Bachelor&apos;s Degree in computer science to broaden my
            knowledge and opportunities within the computer science field.
          </p>
          <p>Below you will find some of my projects for you to take a look at!</p>
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
