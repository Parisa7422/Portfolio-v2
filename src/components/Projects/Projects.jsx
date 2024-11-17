import "../Projects/Projects.css";

import sampel1 from "../../assets/projects/portfolio.png";
import sampel2 from "../../assets/projects/tindog.png";
import sampel3 from "../../assets/projects/planner.png";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Responsive Web Design",
    src: sampel1,
    url: "https://parisa7422.github.io/Portfolio-v1/",
  },
  {
    id: 2,
    title: "TinDog",
    description: "Inspired by Tinder",
    src: sampel2,
    url: "https://parisa7422.github.io/TinDog/",
  },
  {
    id: 3,
    title: "Planner",
    description: "Goal and Note Manager",
    src: sampel3,
    url: "https://github.com/Parisa7422/Planner",
  },
];
function Projects() {
  return (
    <div className="projects-container">
      <div className="container">
        <div className="w-100 d-flex flex-column">
          <div className="projects-context d-flex flex-column">
            <div className="projects-context__title">
              <h2>Projects From My Coding Journey</h2>
            </div>
            <div className="projects-context__description">
              <span>
                These projects are part of my journey as a junior developer.
                I've been at it for a few years and love working with
                technologies like React and JavaScript. There's always more to
                learn, and I'm excited to keep growing and building!
              </span>
            </div>
          </div>
          <div className="slide-container mt-4 d-inline-flex rounded">
            {projects.map((item) => (
              <Slide
                key={item.id}
                title={item.title}
                description={item.description}
                src={item.src}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;

function Slide({ title, description, src, url }) {
  return (
    <div className="me-3 position-relative">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="slide-image rounded" src={src} alt="sample" />
        <div className="slide-container__context position-absolute">
          <div className="slide-container__context-title text-white fw-bold fs-4">
            {title}
          </div>
          <div className="slide-container__context-description fs-6 text-white">
            {description}
          </div>
        </div>
      </a>
    </div>
  );
}
