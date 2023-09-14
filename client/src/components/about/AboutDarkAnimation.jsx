import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-box dark-img-box">
            <img src="img/about/about-2.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-dealay="100"
        >
          <div className="typo-box about-me">
            <h3>Jacob Castanon</h3>
            <h5>
              Traveling <span className="color-theme">Worship Leader</span> and {" "}
              <span className="color-theme">Minister</span>
            </h5>
            <p>
              Jacob is dedicated to serving people. He is a passionate worship leader who uses the power of music to connect people with their faith, 
              leading congregations into profound moments of spiritual reflection and praise. Additionally, as a pastor and avid traveler, 
              Jacob combines his deep-rooted faith with his love for exploration, embarking on transformative journeys that allow him to minister 
              to diverse communities around the world, spreading the message of love, hope, and unity.
            </p>
            <div className="row about-list">
              {/* <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1991</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div> */}
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>jacobcastanon@me.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>

                {/* <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div> */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="https://donorbox.org/jacobcastanon">
                GIVE
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
