import "../About/About.css";
import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";

const cards = [
  {
    id: 1,
    title: "Website Design",
    description: "76",
    color: "success",
    icon: <DesktopComputerIcon />,
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "12",
    color: "warning",
    icon: <DeviceMobileIcon />,
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "52",
    color: "danger",
    icon: <BookOpenIcon />,
  },
];
function About() {
  return (
    <div className="container">
      <div className="row flex-md-row-reverse">
        <div className="col-md-6">
          <div className="about-section d-flex flex-column h-100 mb-4">
            <div className="about-header h-75">
              <h2>What do I help?</h2>
              <div className="about-header__description">
                I will help you finding a solution and solve your problems. We
                use process design to create digital products. Besides that also
                help their bussines
              </div>
            </div>
            <div className="counter d-flex justify-content-between">
              <div className="counter-projects d-flex flex-column-reverse">
                <div className="counter-projects__title">Project Completed</div>
                <h2 className="counter-projects__number">285+</h2>
              </div>
              <div className="counter-clients d-flex flex-column-reverse">
                <div className="counter-clients__title">Happy Clients</div>
                <h2 className="counter-clients__number">195+</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0 p-0">
          <div className="sample-container d-flex flex-column justify-content-between align-items-center">
            {cards.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

function Card({ title, description, color, icon }) {
  return (
    <div className="card-container d-flex rounded align-items-center p-3 border shadow-sm bg-body w-100">
      <div
        className={`card-container__icon rounded-circle text-white bg-${color}`}
      >
        {icon}
      </div>

      <div className="d-flex flex-column ms-4">
        <span className="card-container__title fw-bold">{title}</span>
        <span className="card-container__number">{description} projects</span>
      </div>
    </div>
  );
}
