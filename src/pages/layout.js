import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import "../components/styles.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
