import css from "./styles.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modal } from "../../atoms/uiAtoms";

export const DeleteRoomButton = ({ id }: any) => {
  let roomId = id;
  const modalAtomValue = useRecoilValue(modal);
  const modalStateSetter = useSetRecoilState(modal);
  const handleClick = () => {
    console.log(roomId);
    modalAtomValue ? modalStateSetter(false) : modalStateSetter(true);
  };
  return (
    <>
      <div className={css.root} onClick={handleClick}>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    </>
  );
};
