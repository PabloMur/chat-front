import { RoomButton } from "../../ui/RoomButton";
import css from "./styles.module.css";
import { useMyGuestRoomsIDs, useMyRoomsIDs } from "../../hooks";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { emailAtom, myGuestRoomsAtom, myRoomsAtom } from "../../atoms";
import { GuestButton } from "../../ui/GuestButton";
import { Loader } from "../loader";
import { loaderAtom } from "../../atoms/uiAtoms";
import { CustomTitle } from "../../ui/customTitle";

export const MyRoomsPanel = () => {
  const [rooms, setRooms] = useRecoilState(myRoomsAtom);
  const [guestRooms, setGuestRooms] = useRecoilState(myGuestRoomsAtom);
  const email = useRecoilValue(emailAtom);
  const setLoader = useSetRecoilState(loaderAtom);

  useEffect(() => {
    const getRooms = async () => {
      setLoader(true);
      const roomIDs = await useMyRoomsIDs(email);
      const guestRoomsIDs = await useMyGuestRoomsIDs(email);
      if (roomIDs) setRooms(roomIDs);
      if (guestRoomsIDs) setGuestRooms(guestRoomsIDs);
      setLoader(false);
    };
    getRooms();
  }, []);

  return (
    <>
      <div className={css.root}>
        <Loader />
        <div className={css.myrooms}>
          <CustomTitle>Created by you</CustomTitle>
          <div className={css.myRoomsContainer}>
            {rooms.map((roomID: string) => (
              <RoomButton key={roomID} roomID={roomID} />
            ))}
          </div>
        </div>
        <div className={css.guestrooms}>
          <CustomTitle>Created by you</CustomTitle>
          <div className={css.myRoomsContainer}>
            {guestRooms.map((guestRoomsIDs: string) => (
              <GuestButton key={guestRoomsIDs} roomID={guestRoomsIDs} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
