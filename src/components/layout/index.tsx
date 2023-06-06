import React from "react";
import { Outlet } from "react-router-dom";
//import { Header } from "../header";
//<Header />
import { Footer } from "../footer";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
