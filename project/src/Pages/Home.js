import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroComponent from "../HeroComponent/HeroComponent";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroComponent />
      <Footer />
    </div>
  );
};

export default Home;
