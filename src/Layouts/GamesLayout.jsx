import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const GamesLayout = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen ">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GamesLayout;
