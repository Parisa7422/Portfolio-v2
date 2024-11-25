import profileImage from "../../assets/banner-img-2.png";
import "../Home/Home.css";

function Home() {
  return (
    <section id="home">
      <div className="homepage">
        <div className="homepage-header__title">
          <h1>
            Hey There, <br /> I'm{" "}
            <span style={{ color: "#ff6600" }}>Parisa</span>
          </h1>
          <h5 className="header__subtitle">Jounir Web Developer</h5>
        </div>
        <div className="homepage-img">
          <img
            src={profileImage}
            alt="profile"
            className="homepage-banner-img"
          />
        </div>
        <div className="homepage-header__description">
          <h6>Passionate designer and fast learner</h6>
        </div>
      </div>
    </section>
  );
}

export default Home;
