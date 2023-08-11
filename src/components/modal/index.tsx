import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { modal } from "../../atoms/uiAtoms";
export function Modal() {
  const modalAtomValue = useRecoilValue(modal);
  const test = () => {
    alert("Eliminando la Sala");
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
