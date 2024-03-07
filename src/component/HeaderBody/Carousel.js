import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./CarouselData.js";

const Carousel = () => {
  const items = homeCarouselData.map((item) => (
    <img className="cursor-pointer" src={item.image} alt="/" />
  ));
  return (
    <AliceCarousel mouseTracking items={items} disableButtonsControls autoPlay autoPlayInterval={1500} infinite />
  );
};

export default Carousel;
