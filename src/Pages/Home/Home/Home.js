import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='md:w-11/12 mx-auto'>
            <Carousel/>
            <Services/>
        </div>
    );
};

export default Home;