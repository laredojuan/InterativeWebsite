import React from "react";
import { Button } from "../button/Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/*i can commnent this out so the video won't show or change it*/}
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1> Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far far-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
