import React from "react";
import "../components/App.css";
import Cards from "./cards/Cards";
import Footer from "./footer/Footer";
import HeroSection from "./hero/HeroSection";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
