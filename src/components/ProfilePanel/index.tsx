import { UserEmail } from "../../ui/UserEmail";
import { UserImage } from "../../ui/UserImage";
import { UserName } from "../../ui/UserName";
import css from "./styles.module.css";
import { useGetUserMe, useGoTo } from "../../hooks";
import { useRecoilValue } from "recoil";
import { userTokenAtom } from "../../atoms";

export const ProfilePanel = () => {
  const goTo = useGoTo();
  const token = useRecoilValue(userTokenAtom);
  useGetUserMe(token);
  const handleClick = () => {
    goTo("/settings");
    console.log("as");
  };
  return (
    <>
      <div className={css.root}>
        <UserImage />
        <div>
          <UserName />
          <UserEmail />
          <button className={css.editButton} onClick={handleClick}>
            Editar Datos
          </button>
        </div>
      </div>
    </>
  );
};
