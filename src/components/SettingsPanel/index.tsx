import css from "./styles.module.css";
import FileUploader from "../dropzoneCompTest";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  emailAtom,
  userImageUploadUrlAtom,
  userNameAtom,
  userTokenAtom,
} from "../../atoms";
import { useGoTo, useUpdateUserData } from "../../hooks";
import { Loader } from "../loader";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useState } from "react";
import { CustomTitle } from "../../ui/customTitle";

export const SettingsPanel = () => {
  const userName = useRecoilValue(userNameAtom);
  const [updateUserImage, setUpdateUserImage] = useRecoilState(
    userImageUploadUrlAtom
  );
  const email = useRecoilValue(emailAtom);
  const token = useRecoilValue(userTokenAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const goto = useGoTo();
  const [updatingName, setUpdatingName] = useState(userName);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loaderSetter(true);
    let update;
    let newData = {
      name: updatingName,
    } as any;
    if (updateUserImage !== "") {
      newData = {
        ...newData,
        userImage: updateUserImage,
      };
    }
    update = await useUpdateUserData(token, email, newData);
    if (update.userUpdated) {
      setUpdateUserImage("");
      loaderSetter(false);
      goto("/profile");
    }
  };
  return (
    <>
      <div className={css.root}>
        <CustomTitle>Configuracion de perfil</CustomTitle>
        <Loader />
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.labelsContainer}>
            <div className={css.cont1}>
              <label>
                <p>Imagen de perfil</p>
                <FileUploader />
              </label>
            </div>
            <div className={css.cont2}>
              <label>
                <p>Nombre</p>
                <input
                  className={css.input}
                  type="text"
                  placeholder={userName}
                  name="username"
                  onChange={(e) => {
                    setUpdatingName(e.target.value);
                  }}
                />
              </label>
              <button className={css.button}>Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
