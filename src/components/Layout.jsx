import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getPage } from "../data/seo";

function Layout() {
  const { pathname } = useLocation();

  // Each page's HTML is pre-rendered with its own title; keep the tab title
  // in step when navigating within the app.
  useEffect(() => {
    document.title = getPage(pathname).title;
  }, [pathname]);

  return (
    <div className="Wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
