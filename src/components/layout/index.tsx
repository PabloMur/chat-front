import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
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
