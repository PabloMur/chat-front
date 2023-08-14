import { UserEmail } from "../../ui/UserEmail";
import { UserImage } from "../../ui/UserImage";
import { UserName } from "../../ui/UserName";
import css from "./styles.module.css";
import { useGetUserMe, useGoTo } from "../../hooks";
import { useRecoilValue } from "recoil";
import { emailAtom, userTokenAtom } from "../../atoms";
import { useEffect } from "react";

export const ProfilePanel = () => {
  const goTo = useGoTo();
  const token = useRecoilValue(userTokenAtom);
  const email = useRecoilValue(emailAtom);

  useEffect(() => {
    const getUserData = async () => {
      const test = await useGetUserMe(email, token);
      if (test) console.log(test);
    };
    getUserData();
  }, []);

  const handleClick = () => {
    goTo("/settings");
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
