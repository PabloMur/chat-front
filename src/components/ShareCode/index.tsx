import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";

export const ShareCodeBanner = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <h2>Comparte este codigo:</h2>
        <h2 className={css.code}> {roomCode}</h2>
      </div>
    </>
  );
};
