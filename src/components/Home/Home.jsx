import profileImage from "../../assets/profile-1.png";
import brushObject from "../../assets/brush.png";
import "../Home/Home.css";
function Home() {
  return (
    <div className="homepage d-flex flex-column p-4 pb-0">
      <div className="homepage-header d-flex flex-column flex-md-row align-items-md-center justify-content-between ">
        <h1 className="homepage-header__title fw-bold">
          Hey There,
          <br /> I'm Parisa
        </h1>
        <h6 className="homepage-header__description">
          I design beautifuly simple things,
          <br /> And I love what I do
        </h6>
      </div>
      <div className="homepage-banner-box position-relative d-flex flex-column justify-content-end align-items-center flex-grow-1">
        <img
          src={brushObject}
          alt="background"
          className="position-absolute z-0"
        />
        <img
          src={profileImage}
          alt="profile"
          className="homepage-banner-image position-absolute "
        />
      </div>
    </div>
  );
}
export default Home;
