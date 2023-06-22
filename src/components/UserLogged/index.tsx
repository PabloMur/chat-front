import css from "./styles.module.css";
import { userLogged } from "../../atoms";
import { useRecoilValue } from "recoil";

export const UserLoggued = () => {
  const logged = useRecoilValue(userLogged);

  return (
    <>
      <div className={css.root}>status: {JSON.stringify(logged)}</div>
    </>
  );
};
