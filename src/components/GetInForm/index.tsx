import { useRecoilValue, useSetRecoilState } from "recoil";
import { loaderAtom } from "../../atoms/uiAtoms";
import css from "./styles.module.css";
import { useGetInRoom, useGoTo, useAPISetImGuest } from "../../hooks";
import {
  realtimeRoomIdAtom,
  roomIdAtom,
  roomCreatorAtom,
  emailAtom,
} from "../../atoms";

//aca tengo que lograr que ademas de setear la ide de la sala, la ide de la room hacer la llamada al hook para que se setee en firestore tambien

export const GetInForm = () => {
  const loaderSetter = useSetRecoilState(loaderAtom);
  const roomIdSetter = useSetRecoilState(roomIdAtom);
  const realtimeIdSetter = useSetRecoilState(realtimeRoomIdAtom);
  const roomCreatorSetter = useSetRecoilState(roomCreatorAtom);
  const email = useRecoilValue(emailAtom);

  const goto = useGoTo();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loaderSetter(true);
    const res = await useGetInRoom(e.target.room.value);
    if (res) {
      roomIdSetter(e.target.room.value);
      realtimeIdSetter(res.roomId);
      roomCreatorSetter(false);
      useAPISetImGuest(email, res.roomId, e.target.room.value);
      goto("/room/" + e.target.room.value);
      loaderSetter(false);
    }
    loaderSetter(false);
  };
  return (
    <>
      <div className={css.root}>
        <h2>Ingresa el codigo de la sala</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            <p>Room Code</p>
            <input className={css.input} type="text" name="room" />
          </label>
          <button className={css.button}>Ingresar</button>
        </form>
      </div>
    </>
  );
};
