import "../Testimonials/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials-container d-flex">
      <div className="container flex-column">
        <div className="testimonials-context d-flex flex-column align-items-center p-4">
          <div className="testimonial-context__title">
            <h2 style={{ textAlign: "center" }}>What People Say About Me</h2>
          </div>
          <div className="testimonial-context__description d-flex">
            <span>
              I’ve always wanted my work to make a difference—whether it’s
              making people’s daily lives a little easier or creating complex
              apps that are simple to use.
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide mb-4 mt-4"
        >
          <div className="carousel-indicators">
            {/* <button
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
            ></button> */}
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
      "Parisa is an exceptional developer who possesses skills one would want in an excellent Front-end developer. she masters the top programming languages. She has been a great resource to my clients. She did an incredible job on all projects, making timely deliveries and helping me nurture long-term relationships with my clients. Her work is always top-notch, and she is always welcoming to feedback and making improvements. Plus, Parisa is self-motivated and a great team player.",
    author: "Reza Malekan",
    position: "Full Stack Marketer | E-commerce",
  },
];

function CarouselItem({ comment, author, position }) {
  return (
    <div>
      <div className="comment-box bg-white rounded d-flex flex-column m-auto align-items-center p-4">
        <span className="comment-text">{comment}</span>
        <div className="hr"></div>
        <span className="fw-bold">{author}</span>
        <span className="fw-light">{position}</span>
      </div>
    </div>
  );
}
