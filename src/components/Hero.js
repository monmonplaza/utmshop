import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper d--grid">
            <div className="hero__content">
              <div className="hero__content__wrap">
                <span>Unleash your Masterpiece</span>
                <h1>How do we Start</h1>
                <p>Books comes cheaper when you buy in bundle</p>
                <Link to="/">
                  Shop Now <FaAngleRight />
                </Link>
              </div>
            </div>
            <figure className="hero__img">
              <img src="./images/banner.jpg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
