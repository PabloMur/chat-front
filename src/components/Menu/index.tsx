import { CloseSessionButton } from "../../ui/CloseSessionButton";
import { Logo } from "../Logo";
import { MenuDesplegable } from "../MenuDesplegable";
import css from "./styles.module.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <div className={css.root}>
        <Logo />
        <div className={css.linkContainer}>
          <ul className={css.list}>
            <li className={css.li}>
              <Link to="/home">Home</Link>
            </li>
            <li className={css.li}>
              <Link to="/my-rooms">Rooms</Link>
            </li>
            <li className={css.li}>
              <Link to="/profile">Profile</Link>
            </li>
            <li className={css.li}>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <div className={css.actionsContainer}>
            <CloseSessionButton />
          </div>
        </div>
        <MenuDesplegable />
      </div>
    </>
  );
};
