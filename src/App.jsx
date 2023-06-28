import { useState } from "react";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Resume from "./assets/Anthony Pillow 2023 Resume.pdf";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";

function App() {
  // state to store project objects to be rendered by the project container component
  const [projects, setProjects] = useState([
    {
      title: "TGBL",
      url: "https://github.com/SquidDOTjpeg/TGBL",
      deployedURL: "https://thegoodboylist.herokuapp.com/",
    },
    {
      title: "Coming Soon",
      url: "https://github.com",
      deployedURL: "https://thegoodboylist.herokuapp.com/",
    },
    {
      title: "Coming Soon",
      url: "https://github.com",
      deployedURL: "https://thegoodboylist.herokuapp.com/",
    },
  ]);

  return (
    <>
      <Nav />
      <ContentContainer id="about">
        <h1>Howdy howdy,</h1>
        <p>
          I'm Anthony Pillow a photographer, rock climber, and full stack web
          developer. I appreciate you checking out my portfolio page.
        </p>
        <p>
          I started coding after following courses on Udemy and decided to
          pursue coding through a formal bootcamp hosted at UC Davis Continuing
          and Professional Education. After completing the 6 month course I went
          on to join the company that provided the course as an Instructional
          Specialist and have been keeping my skills sharp while teaching new
          developers how to code.
        </p>
        <p>
          Below are my projects, resume and skills info, and how to contact me
          with any inquiries.
        </p>
      </ContentContainer>
      <ContentContainer id="projects">
        <h1>Projects</h1>
        <ProjectContainer projectArray={projects} />
      </ContentContainer>
      <ContentContainer id="resume">
        <h1>Skills and Resume</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%"
          }}
        >
          <ul>
            <li>React</li>
            <li>Mongo</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS & CSS Frameworks</li>
            <li>API integration</li>
            <li>Heroku Deployment</li>
          </ul>
          <div>
            <a href={Resume} download className="nav-links">
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer id="contact">
        <h1>Contact Me</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <p><span>
              <FontAwesomeIcon icon={faEnvelope} /> anthonypillow18@gmail.com
            </span></p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGithub} /> SquidDOTjpeg
            </span>
          </p>
        </div>
      </ContentContainer>
    </>
  );
}

export default App;
