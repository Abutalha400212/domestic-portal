import React from "react";
import { bannerData } from "../../../loader/CaroLoad";
import CarouselLoader from "./CarouselLoader";
const Carousel = () => {
  return (
    <div className="carousel overflow-hidden relative w-full">
      {bannerData.map((banner) => (
        <CarouselLoader key={banner.id} banner={banner} />
      ))}
    </div>
  );
};

export default Carousel;
