import { useSetRecoilState } from "recoil";
import { loaderAtom } from "../../atoms/uiAtoms";
import css from "./styles.module.css";
import { useGetInRoom, useGoTo } from "../../hooks";
import { realtimeRoomIdAtom, roomIdAtom } from "../../atoms";

export const GetInForm = () => {
  const loaderSetter = useSetRecoilState(loaderAtom);
  const roomIdSetter = useSetRecoilState(roomIdAtom);
  const realtimeIdSetter = useSetRecoilState(realtimeRoomIdAtom);
  const goto = useGoTo();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loaderSetter(true);
    const res = await useGetInRoom(e.target.room.value);
    if (res) {
      roomIdSetter(e.target.room.value);
      realtimeIdSetter(res.roomId);
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
