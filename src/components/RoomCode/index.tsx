import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";
import { RealtimeCode } from "../RealtimeCode";
export const RoomCode = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <RealtimeCode />
        <p>ROOM: {roomCode}</p>
      </div>
    </>
  );
};
