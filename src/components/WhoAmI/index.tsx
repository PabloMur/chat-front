import css from "./styles.module.css";
import { roomCreatorAtom } from "../../atoms";
import { useRecoilValue } from "recoil";

export const WhoAmI = () => {
  const creator = useRecoilValue(roomCreatorAtom);
  return (
    <>
      <div className={css.root}>creator : {JSON.stringify(creator)}</div>
    </>
  );
};
