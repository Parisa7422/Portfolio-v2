import "../Testimonials/Testimonials.css";

import profileImage from "../../assets/profile.png";
import profileImage2 from "../../assets/profile-1.png";
function Testimonials() {
  return (
    <div className="testimonials-container d-flex">
      <div className="container flex-column">
        <div className="testimonials-context d-flex flex-column align-items-center p-4">
          <div className="testimonial-context__title">
            <h2 style={{ textAlign: "center" }}>People Talk About Me</h2>
          </div>
          <div className="testimonial-context__description d-flex">
            <span>
              I always wanted my work to be part of a bigger self to make
              people's daily lives and complex app simple to use.
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide mb-4 mt-4"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <CarouselItem
                  comment={item.comment}
                  author={item.author}
                  position={item.position}
                  src={item.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;

const data = [
  {
    id: 1,
    comment:
      "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web",
    author: "Anamika Sandula",
    position: "Product Manager",
    src: profileImage,
  },
  {
    id: 2,
    comment:
      "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web",
    author: "John Allendane",
    position: "Creative Manager",
    src: profileImage2,
  },
];

function CarouselItem({ comment, author, position, src }) {
  return (
    <div>
      <div className="comment-box bg-white rounded d-flex flex-column m-auto align-items-center p-4">
        <img
          className="comment-image rounded-circle bg-success position-absolute top-0 start-50 translate-middle"
          src={src}
          alt="profile"
        />
        <span className="comment-text">{comment}</span>
        <div className="hr"></div>
        <span className="fw-bold">{author}</span>
        <span className="fw-light">{position}</span>
      </div>
    </div>
  );
}
