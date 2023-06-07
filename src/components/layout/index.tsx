import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import Circle from "../../ui/BackgroundCircle";
import css from "./styles.module.css";

const Layout = () => {
  return (
    <>
      <div className={css.root}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export { Layout };
