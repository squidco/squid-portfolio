import { useState } from "react";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Resume from "./assets/Anthony_Pillow_Current_Resume.pdf";
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
        <h1 className="outline">Howdy,</h1>
        <p>
          I'm Anthony Pillow: photographer, rock climber, and full stack web
          developer. If I'm not spending time on my hobbies I'm usually hanging
          out with friends or exploring abandoned places.
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
        <h1 className="outline">Projects</h1>
        <ProjectContainer projectArray={projects} />
      </ContentContainer>

      <ContentContainer id="resume">
        <div>
          <h1 className="outline">Skills and Resume</h1>
          <a href={Resume} download className="nav-links">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        ></div>
      </ContentContainer>

      <ContentContainer id="contact">
        <h1 className="outline">Contact Me</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
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
    </>
  );
}

export default App;
