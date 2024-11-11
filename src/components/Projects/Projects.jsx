import "../Projects/Projects.css";

import sampel1 from "../../assets/sample1.png";
import sampel2 from "../../assets/sample2.png";
import sampel3 from "../../assets/sample3.png";

const projects = [
  {
    id: 1,
    title: "App Design",
    description: "Food Delivery App",
    src: sampel1,
  },
  { id: 2, title: "Web Design", description: "Agency Website", src: sampel2 },
  { id: 3, title: "Branding", description: "Shopping", src: sampel3 },
];
function Projects() {
  return (
    <div className="container">
      <div className="projects-container w-100 d-flex flex-column">
        <div className="projects-context d-flex flex-column">
          <div className="projects-context__title">
            <h2>My Latest Works</h2>
          </div>
          <div className="projects-context__description">
            <span>Perfect solution for digital product</span>
          </div>
        </div>
        <div className="slide-container mt-4 d-inline-flex rounded">
          {projects.map((item) => (
            <Slide
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;

function Slide({ title, description, src }) {
  return (
    <div className="me-3 position-relative">
      <img className="slide-image rounded" src={src} alt="sample" />
      <div className="slide-container__context position-absolute">
        <div className="slide-container__context-title text-white fw-bold fs-4">
          {title}
        </div>
        <div className="slide-container__context-description fs-6 text-white">
          {description}
        </div>
      </div>
    </div>
  );
}
