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

      {/* removed other content here to put draft live */}

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
