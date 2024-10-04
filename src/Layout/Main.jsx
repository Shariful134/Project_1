import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
