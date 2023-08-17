import css from "./styles.module.css";
import FileUploader from "../dropzoneCompTest";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emailAtom, userNameAtom, userTokenAtom } from "../../atoms";
import { useGoTo, useUpdateUserData } from "../../hooks";
import { Loader } from "../loader";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useState } from "react";

export const SettingsPanel = () => {
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const token = useRecoilValue(userTokenAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const goto = useGoTo();
  const [updatingName, setUpdatingName] = useState(userName);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loaderSetter(true);
    const update = await useUpdateUserData(token, email, {
      name: updatingName,
    });
    if (update) {
      loaderSetter(false);
      goto("/profile");
    }
  };
  return (
    <>
      <div className={css.root}>
        <Loader />
        <form className={css.form} onSubmit={handleSubmit}>
          <h1>Configuracion de perfil</h1>
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
