import React from "react";
import "./ProjectCard.css"

export default function ProjectCard({title, url}) {
  function handleClick() {
    window.open(url, "_blank")
  }

  return (
    <div onClick={handleClick} className="project-card">
      <h1>{title}</h1>
    </div>
  );
}
