import React from 'react';
import NavBar from '../../NavBar/NavBar';

const CarouselLoader = ({banner}) => {
  const {image,id,next,prev} = banner
    return (
      <div id={`slide${id}`} className="carousel-item relative w-full gradiant rounded-lg">
      <img alt="" src={image} className="w-full" />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
        <a href={`#slide${prev}`} className="btn btn-circle mr-3">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
        <div className='absolute top-0 w-full'>
            <NavBar/>
        </div>
        <div className='absolute top-40 text-center w-full'>
          <p className='text-md font-sans text-yellow-600'>Let's travel the world with us</p>
         <h1 className='md:text-5xl text-3xl font-serif capitalize text-yellow-50 mb-3'>Explore the  World </h1> <h1 className='md:text-5xl text-3xl font-serif capitalize text-blue-600'>with Travol</h1>
        </div>
      </div> 
    );
};

export default CarouselLoader;