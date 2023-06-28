import { useState } from "react";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
      </ContentContainer>
      <ContentContainer id="projects">
        <ProjectContainer projectArray={projects} />
      </ContentContainer>
      <ContentContainer
        style={{ flexDirection: "row", justifyContent: "space-around" }}
        id="resume"
      >
        <div>
          <p>Skills</p>
          <ul>
            <li>React</li>
            <li>Mongo</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div>
          <a href={Resume} download className="nav-links">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>
      </ContentContainer>
      <ContentContainer id="contact">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
      </ContentContainer>
    </>
  );
}

export default App;
