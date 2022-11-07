import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Main;