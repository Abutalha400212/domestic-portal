import React from 'react';
import useHooks from '../../../Hooks/useHooks';
import Footer from '../../../Shared/Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    useHooks('Home')
    return (
        <div>
            <Carousel/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;