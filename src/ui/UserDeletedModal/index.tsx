import css from "./styles.module.css";
import { deltedAccountModalAtom } from "../../atoms/uiAtoms";
import { useRecoilValue } from "recoil";
export const UserDeletedModal = () => {
  const shownModal = useRecoilValue(deltedAccountModalAtom);
  return (
    shownModal && (
      <>
        <div className={css.root}>
          <div className={css.modalContainer}>
            <p>Usuario Eliminado Correctamente!</p>
          </div>
        </div>
      </>
    )
  );
};
