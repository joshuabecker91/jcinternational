import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/SliderFourAnimation";
import About from "../components/about/AboutDarkAnimation";
import Service from "../components/service/ServiceAnimation";
// import Skills from "../components/skills/SkillsAnimation";
import Portfolio from "../components/portfolio/PortfolioAnimation";
import Testimonial from "../components/testimonial/TestimonialAnimation";
import Blog from "../components/blog/BlogAnimation";
import Contact from "../components/contact/ContactAnimation";
import Footer from "../components/footer/FooterAnimation";
import useDocumentTitle from "../components/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Jacob Castanon | JC International");
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Mission</h3>
              <p>
                My mission is to ...I love xyz,... to minister to xyz... It brings me joy to.... 
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          {/* Adding code here  */}
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">How can I help?</h3>
              <p className="mb-4">
                I dedicate my time to full time ministry. My mission is to ... If you would like to partner with me ...
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="https://donorbox.org/jacobcastanon">
                  GIVE
                </a>
              </div>
            </div>
          </div>
          {/* to here instead of Skills component for now  */}
          {/* <Skills /> */}
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                Feel free to check out some of what I have been up to...
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

      {/* Blog */}
      <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent Posts</h3>
              <p>
                Posts on various topics...Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
          {/* End .row */}
          <Blog />
        </div>
      </section>
      {/*  End Blog */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div
                  className="sm-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Please do not hesitate to reach out, I would love to hear from you!
                  </p>
                </div>

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    JC International<br />
                    1 Main St, Po Box 1111, <br />
                    Spokane WA 750065.
                  </span>
                </div>
                {/* End media */}

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                    info@jacobcastanon.com
                    <br />
                    info@domain.com
                  </span>
                </div>
                {/* End media */}

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                    820-885-3322
                    <br />
                    820-885-3323
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default Home;
