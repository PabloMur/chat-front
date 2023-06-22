import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { userLogged } from "../../atoms";
import { useGoTo } from "../../hooks";
import { useEffect } from "react";

const Layout = () => {
  const userIsLogged = useRecoilValue(userLogged);
  const goTo = useGoTo();
  useEffect(() => {
    if (!userIsLogged) goTo("/");
  }, []);
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
