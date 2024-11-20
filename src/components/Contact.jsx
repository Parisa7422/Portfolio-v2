import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
const information = [
  {
    id: 1,
    title: "github",
    icon: <FaSquareGithub />,
    url: "https://github.com/Parisa7422",
  },
  {
    id: 2,
    title: "linkedin",
    icon: <FaLinkedin />,
    url: "http://www.linkedin.com/in/parisa-taheri-a6688a13b",
  },
];

function Contact() {
  return (
    <section id="contact">
      <div className="contact-section">
        <div className="container flex-column">
          <div className="header d-flex justify-content-center">
            <h3 style={{ textAlign: "center" }}>
              Let's make something amazing together
            </h3>
          </div>
          <div className="social-media-container d-flex justify-content-center">
            <ul className="d-flex p-2">
              {information.map((item) => (
                <a key={item.id} href={item.url} className="social-media-icon">
                  {item.icon}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
