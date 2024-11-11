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
    jobPosition: "Visual Designer",
    description:
      "A visual designer designs for a variety of platforms, which may include internet and internet sites, games, movies.",
    companyName: "Self-Employed, Brisbane",
    date: "Sep 2016 - Aug 2014",
    color: "success",
  },
  {
    id: 2,
    jobPosition: "UI/UX Designer",
    description:
      "User interface design or user interface enginnering is the design of user interfaces for machines and software.",
    companyName: "New Man Services",
    date: "Jan 17 - Mar 2018",
    color: "danger",
  },
  {
    id: 3,
    jobPosition: "Sr. Product Designer",
    description:
      "Find product Photography Canada, Large selection. always Sale. Cheap Prices. Full Offer. Save Online.",
    companyName: "Global Solution",
    date: "Feb 2019 - Mar 2020",
    color: "warning",
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
