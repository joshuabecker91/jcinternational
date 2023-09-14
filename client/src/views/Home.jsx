import React from "react";
import About from "../components/about/AboutDarkAnimation";
import Footer from "../components/footer/FooterAnimation";
import Header from "../components/header/Header";
import Slider from "../components/slider/SliderFourAnimation";
import useDocumentTitle from "../components/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Jacob Castanon | JCI International");
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
