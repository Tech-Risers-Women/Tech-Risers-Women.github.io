import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="Wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
