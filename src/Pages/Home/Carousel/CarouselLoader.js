import React from "react";
import "./carousel.css";
const CarouselLoader = ({ banner }) => {
  const { image, id, next, prev } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full rounded-lg">
      <div className="gradiant">
        <img alt="" src={image} className="w-full " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
        <a href={`#slide${prev}`} className="btn btn-circle mr-3">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute top-20 text-center w-full">
        <p className="text-md font-sans text-white">
          Let's travel the world with us
        </p>
        <h1 className="md:text-5xl text-3xl font-serif capitalize text-yellow-50 mb-3 stroke-1">
          Explore the World{" "}
        </h1>{" "}
        <h1 className="md:text-5xl text-3xl font-serif capitalize text-blue-300">
          with Travol
        </h1>
        <button className="btn btn-primary mt-3">Get Started</button>
      </div>
    </div>
  );
};

export default CarouselLoader;
