import css from "./styles.module.css";
import { burgerAtom } from "../../atoms/uiAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
export const ThreeLineButton = () => {
  const handleClick = () => {
    alert("click en burguer");
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
  const handleClick = () => {
    alert("click en burguer");
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
  const burgerState = useRecoilValue(burgerAtom);
  return <>{burgerState ? <ThreeLineButton /> : <CrossButton />}</>;
};
