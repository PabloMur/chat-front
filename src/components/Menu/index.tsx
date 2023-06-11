import { Logo } from "../Logo";
import css from "./styles.module.css";

export const Menu = () => {
  return (
    <>
      <div className={css.root}>
        <Logo />
        <div className={css.linkContainer}>
          <ul className={css.list}>
            <li className={css.li}>
              <a href="/profile">My Profile</a>
            </li>
            <li className={css.li}>
              <a href="/settings">Settings</a>
            </li>
            <li className={css.li}>
              <a href="/my-rooms">My Rooms</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
