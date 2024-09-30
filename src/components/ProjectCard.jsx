import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function ProjectCard({
  title,
  image,
  repoURL,
  deployedURL,
  description,
  technologiesUsed,
}) {
  // Renders a card that has a title, url, and deployedURL on click it will open a new page to either the repo or deployed application

  // Logic for fading in when component is visible
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  function callback(entries) {
    const [entry] = entries;
      setVisible(entry.isIntersecting);   
  }

  const options = {
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (domRef.current) observer.observe(domRef.current);
    if (isVisible){
      observer.unobserve(domRef.current)
    }
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={domRef}
        className={`${
          isVisible ? "opacity-1 translate-y-0" : "opacity-0 translate-y-1/2"
        } transition-all ease-in m-3 flex flex-row items-center content-center shadow-xl p-2 rounded my-24`}
      >
        <div className="flex flex-col relative h-full justify-center">
          <img
            src={image}
            alt={`A screenshot of one of ${title}'s webpages`}
            className="z-10 relative rounded"
          />
          <div className="splotch-sm z-0"></div>
          <ul className="project-tech-list z-10">
            {technologiesUsed.map((tech) => (
              <li className="project-tech-item text-sm" key={uuid4()}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col h-full justify-center">
          <div className="mx-4">
            <h1 className="text-xl text-left">{title}</h1>
            <p className="text-base">{description}</p>
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
      </div>
    </>
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
