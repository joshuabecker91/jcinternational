import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `  I met Jacob at xyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      reviewerName: "Nancy Byers",
      rating: "5.0",
    },
    {
      imageName: "team-2",
      desc: `  I met Jacob at xyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      reviewerName: "Jara Afsari",
      rating: "4.8",
    },
    {
      imageName: "team-3",
      desc: `  I met Jacob at xyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      reviewerName: "Sarah Kiaram",
      rating: "5.0",
    },
    {
      imageName: "team-4",
      desc: `  I met Jacob at xyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      reviewerName: "Kim Kiaram",
      rating: "5.0",
    },
    {
      imageName: "team-4",
      desc: `  I met Jacob at xyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      reviewerName: "John King",
      rating: "5.0",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            className="testmonial-box media"
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="avatar">
              <img
                src={`img/testimonial/${val.imageName}.jpg`}
                alt="review comments"
              ></img>
            </div>

            {/* End avatar */}

            <div className="testmonial-text media-body">
              <p>{val.desc}</p>
              <div className="testmonial-info">
                <h6>{val.reviewerName}</h6>
                {/* <div className="rating-value"> */}
                  {/* <i className="ti-star"></i> */}
                  {/* <span>{val.rating}</span> */}
                {/* </div> */}
              </div>
            </div>

            {/* End testimonial-text */}
          </div>
        ))}
      </Slider>
    </>
  );
}
