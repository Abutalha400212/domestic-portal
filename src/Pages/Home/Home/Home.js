import React from 'react';
import useHooks from '../../../Hooks/useHooks';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    useHooks('Home')
    return (
        <div>
            <Carousel/>
            <Services/>
        </div>
    );
};

export default Home;