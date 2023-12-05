import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";

export default function ProjectCard({
  title,
  image,
  repoURL,
  deployedURL,
  description,
  technologiesUsed,
}) {
  // renders a card that has a title, url, and deployedURL
  // on click it will open a new page to either the repo or deployed application

  return (
    <div className="project-card">
      <h1>{title}</h1>
      <img
        src={image}
        alt={`A screenshot of one of ${title}'s webpages`}
        className="project-image"
      />
      <p className="project-description text-center">{description}</p>
      <ul className="project-tech-list">
        {technologiesUsed.map((tech) => (
          <li className="project-tech-item" key={uuid4()}>
            {tech}
          </li>
        ))}
      </ul>
      <div className="project-links-container">
        <a
          className="nav-links"
          href={deployedURL}
          rel="noreferrer"
          target="_blank"
        >
          <span className="project-title">Deployed</span>
        </a>
        <a
          className="nav-links"
          href={repoURL}
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  repoURL: PropTypes.string,
  deployedURL: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.array,
};
