import css from "./styles.module.css";
import { useRecoilValue } from "recoil";
import { roomIdAtom } from "../../atoms";

export const ShareCodeBanner = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  return (
    <>
      <div className={css.root}>
        <div className={css.crossContainer}>
          <div className={css.cross}>X</div>
        </div>
        <div className={css.textContainer}>
          <h2>Comparte este codigo:</h2>
          <h2 className={css.code}> {roomCode}</h2>
          <h2>con la persona que quieres hablar.</h2>
        </div>
      </div>
    </>
  );
};
