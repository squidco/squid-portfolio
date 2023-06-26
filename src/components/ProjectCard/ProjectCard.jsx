import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, url, deployedURL }) {
  // renders a card that has a title, url, and deployedURL
  // on click it will open a new page to either the repo or deployed application

  function handleClick(destination) {
    window.open(url, "_blank");
  }

  return (
    <div className="project-card">
      <a className="nav-links" href={url} target="_blank"><span className="project-title">{title}</span></a>
      <a className="nav-links" href={deployedURL} target="_blank">Github</a>
    </div>
  );
}
