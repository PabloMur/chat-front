import { RoomButton } from "../../ui/RoomButton";
import css from "./styles.module.css";
import { useMyRoomsIDs } from "../../hooks";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailAtom, myRoomsAtom } from "../../atoms";

export const MyRoomsPanel = () => {
  const [rooms, setRooms] = useRecoilState(myRoomsAtom);
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    const getRooms = async () => {
      const roomIDs = await useMyRoomsIDs(email);
      if (roomIDs) setRooms(roomIDs);
    };
    getRooms();
  }, []);

  return (
    <div className={css.root}>
      {rooms.map((roomID: string) => (
        <RoomButton key={roomID} roomID={roomID} />
      ))}
    </div>
  );
};
