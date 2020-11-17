import React from "react";

import heroBackground from "images/hero-background.jpg";

import "./Banner.scss";

const Banner = () => {
  return <img alt="Banner" src={heroBackground} className="banner__image" />;
};

export default Banner;
