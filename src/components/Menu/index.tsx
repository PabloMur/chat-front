import { Logo } from "../Logo";
import css from "./styles.module.css";

export const Menu = () => {
  return (
    <>
      <div className={css.root}>
        <Logo />
        <div className={css.linkContainer}>
          <ul className={css.list}>
            <li className={css.li}>My Profile</li>
            <li className={css.li}>Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
};
