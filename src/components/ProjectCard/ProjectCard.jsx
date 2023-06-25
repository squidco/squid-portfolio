import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, url }) {
  // renders a card that has a title, url, and deployedURL
  // on click it will open a new page to either the repo or deployed application

  function handleClick() {
    window.open(url, "_blank");
  }

  return (
    <div onClick={handleClick} className="project-card">
      <h1>{title}</h1>
    </div>
  );
}
