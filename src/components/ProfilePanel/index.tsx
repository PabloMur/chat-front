import { UserEmail } from "../../ui/UserEmail";
import { UserImage } from "../../ui/UserImage";
import { UserName } from "../../ui/UserName";
import css from "./styles.module.css";
import { useGetUserMe, useGoTo } from "../../hooks";
import { useRecoilValue } from "recoil";
import { userTokenAtom } from "../../atoms";
import { useEffect } from "react";

export const ProfilePanel = () => {
  const goTo = useGoTo();
  const token = useRecoilValue(userTokenAtom);
  const getUserData = async () => {
    const test = await useGetUserMe(token);
    return test;
  };
  useEffect(() => {
    console.log("as");
    console.log(token);

    getUserData();
  }, []);
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
