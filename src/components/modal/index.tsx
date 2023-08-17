import css from "./styles.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loaderAtom, modal } from "../../atoms/uiAtoms";
import { roomIdAtom, userTokenAtom } from "../../atoms/index";
import { useDeleteRoom, useGoTo } from "../../hooks/index";

export function Modal() {
  const modalAtomValue = useRecoilValue(modal);
  const roomId = useRecoilValue(roomIdAtom);
  const setLoader = useSetRecoilState(loaderAtom);
  const setModalStatus = useSetRecoilState(modal);
  const token = useRecoilValue(userTokenAtom);
  const goTo = useGoTo();

  const test = async () => {
    setLoader(true);
    const deletedRoom = await useDeleteRoom(roomId, token);
    if (deletedRoom) {
      setLoader(false);
      setModalStatus(false);
      goTo("/home");
    }
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
