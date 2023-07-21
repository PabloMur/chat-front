import { useRecoilValue } from "recoil";
import css from "./styles.module.css";
import { userImageAtom } from "../../atoms";

export const UserImage = () => {
  const imgUrl = useRecoilValue(userImageAtom);
  return (
    <>
      <div className={css.root}>
        <div className={css.img}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </>
  );
};
