import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
