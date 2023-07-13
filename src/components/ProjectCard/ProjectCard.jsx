import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, repoURL, deployedURL }) {
  // renders a card that has a title, url, and deployedURL
  // on click it will open a new page to either the repo or deployed application

  return (
    <div className="project-card">
      <a className="nav-links" href={deployedURL} target="_blank"><span className="project-title">{title}</span></a>
      <a className="nav-links" href={repoURL} target="_blank">Github</a>
    </div>
  );
}
