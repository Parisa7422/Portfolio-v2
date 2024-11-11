import instagramIcon from "../assets/icon/instagram_icon.png";
import dribbbleIcon from "../assets/icon/dribbble_icon.png";
import gmailIcon from "../assets/icon/gmail_icon.png";
import linkedinIcon from "../assets/icon/linkedin_icon.png";
const information = [
  {
    id: 1,
    title: "instagram",
    icon: instagramIcon,
    url: "http://www.instagram.com/parisa7422",
  },
  {
    id: 2,
    title: "linkedin",
    icon: linkedinIcon,
    url: "http://www.linkedin.com/in/parisa-taheri-a6688a13b",
  },
  {
    id: 3,
    title: "gmail",
    icon: gmailIcon,
    url: "#",
  },
  {
    id: 4,
    title: "dribbble",
    icon: dribbbleIcon,
    url: "#",
  },
];

function Contact() {
  return (
    <div className="container flex-column">
      <div className="header d-flex justify-content-center">
        <h3 style={{ textAlign: "center" }}>
          Let's make something amazing together
        </h3>
      </div>
      <div className="social-media-container d-flex justify-content-center">
        <ul className="d-flex p-2">
          {information.map((item) => (
            <a key={item.id} href={item.url}>
              <img src={item.icon} style={{ width: "70%" }} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Contact;
