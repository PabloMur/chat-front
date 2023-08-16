import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";
import { DeleteRoomButton } from "../../ui/deleteRoomButton";

export const RoomCode = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <h2>ROOM: {roomCode}</h2>
        <DeleteRoomButton></DeleteRoomButton>
      </div>
    </>
  );
};
