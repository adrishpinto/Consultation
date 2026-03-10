import React from "react";
import Navbar from "../Components/Common/Navbar";
import Banner from "../Components/Index/Banner";
import WeProvide from "../Components/Index/WeProvide";
import OurTeam from "../Components/Index/OurTeam";
import Contact from "../Components/Index/Contact";
import Footer from "../Components/Common/Footer";
const Index = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WeProvide />
      <OurTeam />
      <Contact />
    </div>
  );
};

export default Index;
