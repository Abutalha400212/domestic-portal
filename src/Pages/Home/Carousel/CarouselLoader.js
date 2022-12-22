import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./carousel.css";
const CarouselLoader = ({ banner }) => {
  const { image, id, next, prev } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full rounded-lg">
      <div className="gradiant max-h-screen">
        <img alt="" src={image} className="w-full  " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
        <a href={`#slide${prev}`} className="btn btn-circle mr-3">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute top-0 text-center w-full">
        {<NavBar/>}
      </div>
      <div className="absolute top-16 md:top-52 text-center w-full">
        <p className="text-lg font-sans text-white">
          Let's travel the world with us
        </p>
        <h1 className="md:text-5xl text-2xl font-serif capitalize text-yellow-50 md:mb-3 ">
          Explore the World{" "}
        </h1>{" "}
        <p className="md:text-5xl text-xl font-serif capitalize text-blue-300">
          with Travol
        </p>
        <button className="btn btn-primary mt-3 btn-sm md:btn-md">Get Started</button>
      </div>
    </div>
  );
};

export default CarouselLoader;
