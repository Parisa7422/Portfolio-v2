import "../Resume/Resume.css";
function Resume() {
  return (
    <div className="job-position-container">
      <div className="container flex-column">
        <h2 className="pb-5">My Work Experiences</h2>
        {information.map((item) => (
          <JobPosition
            key={item.id}
            jobPosition={item.jobPosition}
            description={item.description}
            companyName={item.companyName}
            date={item.date}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
export default Resume;

const information = [
  {
    id: 1,
    jobPosition: "Web Developer",
    description:
      "I developed and maintained frontend and backend functionalities using Laravel and PHP, managed databases with MySQL, and implemented secure user authentication with Laravel Passport. Using the Blade templating engine, I created responsive and dynamic interfaces. I collaborated with teams to improve website performance and user experience while utilizing Git and GitHub for version control and project management.",
    companyName: "FlyGames, Turkey",
    date: "Aug 2022 - May 2023",
    color: "success",
  },
  {
    id: 2,
    jobPosition: "Assistant IT Manager",
    description:
      "I developed kitchen appliance projects using C# for software solutions, maintained servers to ensure stability and security, and resolved hardware issues to enhance system performance and reduce downtime.",
    companyName: "Rubino, Iran",
    date: "Feb 2017 - Feb 2022",
    color: "danger",
  },
];

function JobPosition({ jobPosition, description, companyName, date, color }) {
  return (
    <div className="job-container d-flex w-100 position-relative">
      <div className="left-shape position-relative">
        <div
          className={`solid-circle bg-${color} rounded-circle position-absolute start-50 translate-middle`}
        ></div>
        <div className="outline-circle rounded-circle border-dark border-2 position-absolute  start-50 translate-middle "></div>
        <div className="vertical-line position-absolute start-50 translate-middle"></div>
      </div>

      <div className="job-position-box d-flex flex-column">
        <div className="job-position-header">
          <span className="job-position-box__title">
            <h4>{jobPosition}</h4>
          </span>
          <span className="job-position-box__description text-break pe-3">
            {description}
          </span>
        </div>
        <div className="job-position-box__footer">
          <span className="job-position-box__company-name mt-4">
            <h6 className="">{companyName}</h6>
          </span>
          <span className="job-position-box__date fw-light mb-4">
            <p>{date}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
