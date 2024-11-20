import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Parisa
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <form className="container-fulid justify-content-start">
            <a
              href="/Portfolio-v2/Parisa_CV.pdf"
              download="Parisa_CV.pdf"
              className="btn btn-sm btn-outline-success me-2"
              type="button"
            >
              Download CV
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
