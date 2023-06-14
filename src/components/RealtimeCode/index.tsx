import css from "./styles.module.css";
import { realtimeRoomIdAtom } from "../../atoms";
import { useRecoilValue } from "recoil";

export const RealtimeCode = () => {
  const realtimeCode = useRecoilValue(realtimeRoomIdAtom);
  return (
    <>
      <div className={css.root}> Chat code: {realtimeCode}</div>
    </>
  );
};
