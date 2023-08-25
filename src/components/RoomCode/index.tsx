import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";
import { DeleteRoomButton } from "../../ui/deleteRoomButton";
import { CustomTitle } from "../../ui/customTitle";

export const RoomCode = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <CustomTitle>ROOM: {roomCode}</CustomTitle>
        <DeleteRoomButton></DeleteRoomButton>
      </div>
    </>
  );
};
