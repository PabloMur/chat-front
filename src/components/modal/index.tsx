import css from "./styles.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modal } from "../../atoms/uiAtoms";
import { roomIdAtom } from "../../atoms/index";

export function Modal() {
  const modalAtomValue = useRecoilValue(modal);
  const roomId = useRecoilValue(roomIdAtom);
  const setLoader = useSetRecoilState(modal);

  const test = () => {
    alert("Eliminando la Sala: " + roomId);
    setLoader(false);
  };
  return (
    modalAtomValue && (
      <div className={css.modalContainer}>
        <button onClick={test} className={css.deleteButton}>
          Eliminar Sala
        </button>
      </div>
    )
  );
}
