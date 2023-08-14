import { UserEmail } from "../../ui/UserEmail";
import { UserImage } from "../../ui/UserImage";
import { UserName } from "../../ui/UserName";
import css from "./styles.module.css";
import { useGetUserMe, useGoTo } from "../../hooks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  emailAtom,
  userImageAtom,
  userNameAtom,
  userTokenAtom,
} from "../../atoms";
import { useEffect } from "react";
import { Loader } from "../loader";
import { loaderAtom } from "../../atoms/uiAtoms";

export const ProfilePanel = () => {
  const goTo = useGoTo();
  const token = useRecoilValue(userTokenAtom);
  const email = useRecoilValue(emailAtom);
  const setLoader = useSetRecoilState(loaderAtom);
  const setUserName = useSetRecoilState(userNameAtom);
  const setUserProfileImage = useSetRecoilState(userImageAtom);

  useEffect(() => {
    const getUserData = async () => {
      setLoader(true);
      const data = await useGetUserMe(email, token);
      const userData = data.userData;
      if (data) {
        setUserName(userData.name);
        setUserProfileImage(userData.userImage);
      }
      setLoader(false);
    };
    getUserData();
  }, []);

  const handleClick = () => {
    goTo("/settings");
  };
  return (
    <>
      <Loader></Loader>
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
