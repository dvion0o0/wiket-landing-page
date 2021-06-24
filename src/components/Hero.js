import React from "react";
import HeroImage from "../Assets/jpg/header-img-florist.jpg";
import HeroSmallImage1 from "../Assets/jpg/header-img-barista.jpg";
import HeroSmallImage2 from "../Assets/jpg/header-img-gardener.jpg";
import HeroSmallImage3 from "../Assets/jpg/header-img-pottery.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-content">
          <div className="hero-content-header">
            <h3>Explore new oppurtunities</h3>
            <h1>
              <span>Grow</span> your business.
            </h1>
          </div>
          <div className="hero-content-text">
            <p>
              <span>Wiket is the first businee to business network </span>
              which lets you connect to mind like people
            </p>
          </div>
        </div>
        {/* hero Images */}
        <div className="hero-image-container">
          <div className="hero-image-big">
            <div className="hero-image-big-caption">
              <h3>Hanging Garden</h3>
              <h4>Florist in Bangkok</h4>
            </div>
            <div className="hero-image">
              <img src={HeroImage} alt="heroimage" />
            </div>
          </div>
          <div className="hero-image-small-container">
            <div className="hero-image-small hero-image-small-1">
              <img src={HeroSmallImage3} alt="herosmall1" />
              <div className="hero-image-small-caption">
                <h5>Potject</h5>
                <h6>Pottery in Bangkok</h6>
              </div>
            </div>
            <div className="hero-image-small hero-image-small-2">
              <img src={HeroSmallImage2} alt="herosmall1" />
              <div className="hero-image-small-caption">
                <h5>Green Thumb</h5>
                <h6>Gardener in CheChe</h6>
              </div>
            </div>
            <div className="hero-image-small hero-image-small-3">
              <img src={HeroSmallImage1} alt="herosmall1" />
              <div className="hero-image-small-caption">
                <h5>Green Cafe</h5>
                <h6>Cafe in Bangkok</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
