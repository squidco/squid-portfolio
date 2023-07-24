import React from "react";
import ProjectCard from "./ProjectCard";
import { v4 as uuid4 } from "uuid";

export default function ProjectContainer({ projectArray }) {
  // takes an array of objects with title, url, and deployedURL properties

  return (
    <div className="project-container">
      {projectArray.map((project) => (
        <ProjectCard
          title={project.title}
          repoURL={project.repoURL}
          deployedURL={project.deployedURL}
          key={uuid4()}
        />
      ))}
    </div>
  );
}
