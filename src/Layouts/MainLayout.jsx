import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen ">
      <Header></Header>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
