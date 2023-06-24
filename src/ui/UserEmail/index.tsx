import { useRecoilValue } from "recoil";
import css from "./styles.module.css";
import { emailAtom } from "../../atoms";

export const UserEmail = () => {
  const email = useRecoilValue(emailAtom);
  return (
    <>
      <div className={css.root}>Email: {email}</div>
    </>
  );
};
