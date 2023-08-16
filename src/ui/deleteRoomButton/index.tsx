import css from "./styles.module.css";
import { useRecoilState } from "recoil";
import { modal } from "../../atoms/uiAtoms";

export const DeleteRoomButton = () => {
  const [modalValue, modalStateSetter] = useRecoilState(modal);
  const handleClick = () => {
    modalValue ? modalStateSetter(false) : modalStateSetter(true);
  };
  return (
    (!modalValue && (
      <>
        <div className={css.root} onClick={handleClick}>
          <div className={css.dot}></div>
          <div className={css.dot}></div>
          <div className={css.dot}></div>
        </div>
      </>
    )) ||
    (modalValue && (
      <>
        <div className={css.root} onClick={handleClick}>
          <div className={css.line}></div>
          <div className={css.invertedLine}></div>
        </div>
      </>
    ))
  );
};
