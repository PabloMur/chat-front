import { Menu } from "../Menu";
import css from "./styles.module.css";
export const HomePanel = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
      </div>
    </>
  );
};
