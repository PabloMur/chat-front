import { useCreateRoom, useGetInRoom, useGoTo } from "../../hooks";
import css from "./styles.module.css";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  emailAtom,
  realtimeRoomIdAtom,
  roomIdAtom,
  userTokenAtom,
  roomCreatorAtom,
} from "../../atoms";

export const Options = () => {
  const goto = useGoTo();
  const loaderSetter = useSetRecoilState(loaderAtom);
  const token = useRecoilValue(userTokenAtom);
  const email = useRecoilValue(emailAtom);
  const roomIdSetter = useSetRecoilState(roomIdAtom);
  const realtimeIdSetter = useSetRecoilState(realtimeRoomIdAtom);
  const roomCreatorSetter = useSetRecoilState(roomCreatorAtom);

  const handleCreateRoom = async () => {
    loaderSetter(true);
    const res = await useCreateRoom(email, token);
    if (res) {
      roomIdSetter(res.roomId);
      const resRealtime = await useGetInRoom(res.roomId);
      realtimeIdSetter(resRealtime.roomId);
      roomCreatorSetter(true);
    }
    loaderSetter(false);
    goto("/room/" + res.roomId);
  };

  const handleGetInRoom = () => {
    goto("/getin-room");
  };

  return (
    <>
      <div className={css.root}>
        <div className={css.textContainer}>
          <h2>Welcome</h2>
        </div>
        <div className={css.buttonsContainer}>
          <button className={css.button} onClick={handleCreateRoom}>
            Crear una Sala
          </button>
          <button className={css.button} onClick={handleGetInRoom}>
            Ingresar a una Sala
          </button>
        </div>
      </div>
    </>
  );
};
