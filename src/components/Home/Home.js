import React from "react";
import Hero from "./Hero";
import About from "./About";
import Marketing from "./Marketing";
import Testimonial from "./Testimonial";
import Bio from "./Bio";
import Sponsors from "./Sponsors";
import Faq from "./Faq";
import Contact from "./Contact";
import MainSponsor from "./MainSponsor";

const Home = () => {
  return (
    <div className="main--container">
      <Hero />
      <About />
      <MainSponsor />
      <Marketing />
      <Bio />
      <Contact />
    </div>
  );
};

export default Home;
