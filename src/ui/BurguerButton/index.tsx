import css from "./styles.module.css";
import { menuDesplegableAtom } from "../../atoms/uiAtoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const ThreeLineButton = () => {
  const setMenuDesplegable = useSetRecoilState(menuDesplegableAtom);
  const handleClick = () => {
    setMenuDesplegable(true);
  };
  return (
    <>
      <div className={css.root} onClick={handleClick}>
        <div className={css.line}></div>
        <div className={css.line}></div>
        <div className={css.line}></div>
      </div>
    </>
  );
};
export const CrossButton = () => {
  const setMenuDesplegable = useSetRecoilState(menuDesplegableAtom);
  const handleClick = () => {
    setMenuDesplegable(false);
  };
  return (
    <>
      <div className={css.root} onClick={handleClick}>
        <div className={css.crossline}></div>
        <div className={css.crossline}></div>
      </div>
    </>
  );
};

export const BurgerButton = () => {
  const burgerState = useRecoilValue(menuDesplegableAtom);
  return burgerState ? <CrossButton /> : <ThreeLineButton />;
};
