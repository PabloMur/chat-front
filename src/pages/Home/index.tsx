import css from "./styles.module.css";
import { HomePanel } from "../../components/homePanel";
import { Menu } from "../../components/Menu";

export const HomePage = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
        <HomePanel />
      </div>
    </>
  );
};
