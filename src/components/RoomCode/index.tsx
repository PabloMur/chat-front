import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";
import { WhoAmI } from "../WhoAmI";
import { UserLoggued } from "../UserLogged";

export const RoomCode = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <WhoAmI />
        <UserLoggued />
        <p>ROOM: {roomCode}</p>
      </div>
    </>
  );
};
