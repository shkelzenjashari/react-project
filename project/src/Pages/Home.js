import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroComponent from "../HeroComponent/HeroComponent";
import GridSection from "../GridSection/GridSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <GridSection />
    </div>
  );
};

export default Home;
