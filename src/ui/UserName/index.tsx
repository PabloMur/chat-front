import { useRecoilValue } from "recoil";
import css from "./styles.module.css";
import { userNameAtom } from "../../atoms";

export const UserName = () => {
  const userName = useRecoilValue(userNameAtom);
  return (
    <>
      <div className={css.root}>User Name: {userName}</div>
    </>
  );
};
