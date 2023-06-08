import css from "./styles.module.css";
import { Menu } from "../Menu";
export const HomePanel = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
      </div>
    </>
  );
};
