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
    <div className="m-3 flex flex-initial flex-row items-center content-center shadow-xl">
      <div className="flex flex-col relative h-full justify-center">
        <img
          src={image}
          alt={`A screenshot of one of ${title}'s webpages`}
          className="w-full border-white p-1 z-10 relative rounded"
        />
        <div className="splotch-sm"></div>
        <ul className="project-tech-list z-10">
          {technologiesUsed.map((tech) => (
            <li className="project-tech-item text-sm" key={uuid4()}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col h-full justify-between pb-1">
        <h1 className="text-xl">{title}</h1>
        <p className="text-base mx-2">{description}</p>
        <div className="project-links-container justify-between">
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
