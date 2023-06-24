import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectContainer.css"

export default function ProjectContainer({ projectArray }) {
  return (
    <div className="project-container">
      {projectArray.map((project) => (
        <ProjectCard title={project.title} url={project.url} />
      ))}
    </div>
  );
}
