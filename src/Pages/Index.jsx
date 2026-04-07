import React from "react";
import Navbar from "../Components/Common/Navbar";
import Banner from "../Components/Index/Banner";
import WeProvide from "../Components/Index/WeProvide";
import Gallery from "../Components/Index/Gallery";
import OurTeam from "../Components/Index/OurTeam";
import Contact from "../Components/Index/Contact";
import Footer from "../Components/Common/Footer";
import Gallery2 from "../Components/Index/Gallery2";

const Index = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Banner />
      </section>
      <section id="services">
        <WeProvide />
      </section>

      <section id="gallery">
        <Gallery2 />
      </section>
      <section id="about">
        <OurTeam />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
