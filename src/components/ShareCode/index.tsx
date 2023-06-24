import css from "./styles.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { roomCreatorAtom, roomIdAtom } from "../../atoms";
import { shareCodeAtom } from "../../atoms/uiAtoms";

export const ShareCodeBanner = () => {
  const roomCode = useRecoilValue(roomIdAtom);
  const [active, setDeactive] = useRecoilState(shareCodeAtom);
  const creator = useRecoilValue(roomCreatorAtom);
  const showShareCode = creator && active;
  const classes = [css.root, css.fadeInButton].join(" ");

  const handleClick = () => {
    setDeactive(false);
  };

  return (
    showShareCode && (
      <div className={classes}>
        <div className={css.crossContainer}>
          <div className={css.cross} onClick={handleClick}>
            X
          </div>
        </div>
        <div className={css.textContainer}>
          <h2>Comparte este codigo:</h2>
          <h2 className={css.code}> {roomCode}</h2>
          <h2>con la persona que quieres hablar.</h2>
        </div>
      </div>
    )
  );
};
