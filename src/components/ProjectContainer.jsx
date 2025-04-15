import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { v4 as uuid4 } from "uuid";

export default function ProjectContainer({ projectArray }) {
  // takes an array of objects with title, url, and deployedURL properties

  return (
    <div className="project-container">
      {projectArray.map((project) => (
        <ProjectCard
          title={project.title}
          image={project.image}
          repoURL={project.repoURL}
          deployedURL={project.deployedURL}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          status={project.status}
          key={uuid4()}
        />
      ))}
    </div>
  );
}

ProjectContainer.propTypes = {
  projectArray: PropTypes.array,
};
