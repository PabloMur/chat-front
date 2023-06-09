import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";

export const RoomCode = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <h3>ROOM: {roomCode}</h3>
      </div>
    </>
  );
};
