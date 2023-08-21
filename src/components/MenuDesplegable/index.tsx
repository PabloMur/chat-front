import { useRecoilValue, useSetRecoilState } from "recoil";
import { CloseSessionButton } from "../../ui/CloseSessionButton";
import css from "./styles.module.css";
import { Link } from "react-router-dom";
import { menuDesplegableAtom } from "../../atoms/uiAtoms";

export const MenuDesplegable = () => {
  const shownValue = useRecoilValue(menuDesplegableAtom);
  const setMenuDesplegle = useSetRecoilState(menuDesplegableAtom);
  const handleRoute = () => {
    setMenuDesplegle(false);
  };
  return (
    shownValue && (
      <>
        <div className={css.root}>
          <div className={css.linkContainer}>
            <ul className={css.list}>
              <li className={css.li}>
                <Link to="/home" className={css.a} onClick={handleRoute}>
                  Home
                </Link>
              </li>
              <li className={css.li}>
                <Link to="/my-rooms" className={css.a} onClick={handleRoute}>
                  Rooms
                </Link>
              </li>
              <li className={css.li}>
                <Link to="/profile" className={css.a} onClick={handleRoute}>
                  Profile
                </Link>
              </li>
              <li className={css.li}>
                <Link to="/settings" className={css.a} onClick={handleRoute}>
                  Settings
                </Link>
              </li>
            </ul>
            <CloseSessionButton />
          </div>
        </div>
      </>
    )
  );
};
