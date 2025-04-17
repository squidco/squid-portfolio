import { useState } from "react";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer";

const status = {
  LEGACY: "Legacy",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  HIATUS: "Hiatus",
};

function App() {
  // State to store project objects to be rendered by the project container component
  const [projects] = useState([
    {
      title: "Curve Area Estimator",
      image: "./assets/images/CAE.png",
      repoURL: "https://github.com/SquidDOTjpeg/curve-area-estimator",
      deployedURL: "https://stupidrectangles.netlify.app/",
      status: status.HIATUS,
      description:
        "A fast way to estimate the area under a curve using an equation, domain, and the number of rectangles. Take the busy work out of Calculus 1!",
      technologiesUsed: ["React", "Node", "Tailwind CSS", "NPM", "Vite.js"],
    },
    {
      title: "TGBL",
      image: "./assets/images/TGBL.png",
      repoURL: "https://github.com/SquidDOTjpeg/TGBL",
      deployedURL: "",
      status: status.LEGACY,
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
  ]);

  return (
    <main className="animate-fadeIn">
      {/* === About Section === */}

      <ContentContainer>
        <h1 className="outline" id="about">
          Hello there,
        </h1>
        <img
          src="./assets/images/profile-picture.jpg"
          alt="A picture of a blonde guy who happens to be myself"
          className="w-48 rounded-full border-white border-2 p-1"
        />
        <p>
          <span className="bold">I'm Anthony Pillow:</span> photographer, rock
          climber, and full stack web developer with 3+ years of experience as a
          full stack web developer and instructional specialist.
        </p>
      </ContentContainer>

      {/* === Projects Section === */}

      <ContentContainer id="projects" classes={"mb-0 mt-5"}>
        <h1 className="outline">Projects</h1>
        <ProjectContainer projectArray={projects} />
      </ContentContainer>
    </main>
  );
}

export default App;
