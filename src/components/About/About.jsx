import "../About/About.css";

import {
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Frontend",
    description: "HTML, CSS,  React.js, JavaScript",
    icon: <FaReact className="react-icons" />,
  },
  {
    id: 2,
    title: "Backend Basics",
    description: "Node.js, Express",
    icon: <FaNodeJs className="react-icons" />,
  },
  {
    id: 3,
    title: "Frameworks",
    description: "PHP, Laravel",
    icon: <FaLaravel className="react-icons" />,
  },
  {
    id: 4,
    title: "UI Frameworks",
    description: "Bootstrap",
    icon: <FaBootstrap className="react-icons" />,
  },
  {
    id: 5,
    title: "Version Control",
    description: "Git, Github",
    icon: <FaGitAlt className="react-icons" />,
  },
];
function About() {
  return (
    <section id="about">
      <div className="about-section">
        <div className="skills-container"></div>
        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-md-7">
              <div className="about-section d-flex flex-column h-100 mb-4">
                <div className="about-header h-75">
                  <h2>A Little About Me</h2>
                  <div className="about-header__description pt-xxl-5">
                    I’m passionate about coding, designing beautiful and
                    functional applications, and always eager to learn new
                    technologies. When I’m not coding, I enjoy playing sports,
                    listening to music, or relaxing with a cup of coffee at a
                    cozy café. I love exploring new adventures and believe in
                    learning something new every day to fuel creativity and
                    curiosity in solving problems and creating meaningful
                    digital experiences.
                  </div>
                </div>
                <div className="counter d-flex justify-content-between pt-4">
                  <div className="counter-projects d-flex flex-column-reverse">
                    <div className="counter-projects__title">
                      Hours of Coding Completed
                    </div>
                    <h2 className="counter-projects__number">100+</h2>
                  </div>
                  <div className="counter-clients d-flex flex-column-reverse">
                    <div className="counter-clients__title">
                      Technologies Explored
                    </div>
                    <h2 className="counter-clients__number">7+</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 mt-5 mt-md-0 d-flex ">
              <div className="sample-container d-flex flex-column justify-content-between align-items-center align-items-md-start">
                {cards.map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;

function Card({ title, description, color, icon }) {
  return (
    <div className="card-container d-flex rounded align-items-center p-3 mb-3 border shadow-sm bg-body w-100">
      <div className={`card-container__icon rounded-circle text-white `}>
        {icon}
      </div>

      <div className="d-flex flex-column ms-4">
        <span className="card-container__title fw-bold">{title}</span>
        <span className="card-container__number">{description}</span>
      </div>
    </div>
  );
}
