import css from "./styles.module.css";
import { useGoTo } from "../../hooks";
import { useGetInRoom } from "../../hooks";
import { useSetRecoilState } from "recoil";
import { realtimeRoomIdAtom, roomIdAtom } from "../../atoms";
export const GuestButton = ({ roomID }: any) => {
  const goto = useGoTo();
  const realtimeCodeSetter = useSetRecoilState(realtimeRoomIdAtom);
  const roomCodeSetter = useSetRecoilState(roomIdAtom);
  const classes = [css.root, css.fadeInButton].join(" ");

  const handleClick = async () => {
    const getIn = await useGetInRoom(roomID);
    if (getIn) realtimeCodeSetter(getIn.roomId);
    roomCodeSetter(roomID);
    goto("/room/" + roomID);
  };

  return (
    <>
      <div className={classes} onClick={handleClick}>
        <h3>{roomID}</h3>
      </div>
    </>
  );
};
