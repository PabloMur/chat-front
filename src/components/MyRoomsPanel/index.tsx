import { RoomButton } from "../../ui/RoomButton";
import css from "./styles.module.css";
import { useMyGuestRoomsIDs, useMyRoomsIDs } from "../../hooks";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailAtom, myGuestRoomsAtom, myRoomsAtom } from "../../atoms";
import { GuestButton } from "../../ui/GuestButton";

export const MyRoomsPanel = () => {
  const [rooms, setRooms] = useRecoilState(myRoomsAtom);
  const [guestRooms, setGuestRooms] = useRecoilState(myGuestRoomsAtom);
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    const getRooms = async () => {
      const roomIDs = await useMyRoomsIDs(email);
      const guestRoomsIDs = await useMyGuestRoomsIDs(email);
      if (roomIDs) setRooms(roomIDs);
      if (guestRoomsIDs) setGuestRooms(guestRoomsIDs);
    };
    getRooms();
  }, []);

  return (
    <div className={css.root}>
      <div className={css.myrooms}>
        <h1>created by you</h1>
        {rooms.map((roomID: string) => (
          <RoomButton key={roomID} roomID={roomID} />
        ))}
      </div>
      <div className={css.guestrooms}>
        <h1>you are guest</h1>
        {guestRooms.map((guestRoomsIDs: string) => (
          <GuestButton key={guestRoomsIDs} roomID={guestRoomsIDs} />
        ))}
      </div>
    </div>
  );
};
