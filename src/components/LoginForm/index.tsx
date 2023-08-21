import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { emailAtom, userLogged, userTokenAtom } from "../../atoms";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { useGetToken, useGoTo } from "../../hooks";
import { FormButton } from "../../ui/FormButton";

export const LoginForm = () => {
  const email = useRecoilValue(emailAtom);
  const setToken = useSetRecoilState(userTokenAtom);
  const setLoader = useSetRecoilState(loaderAtom); // Usamos useRecoilState para actualizar el loader
  const userLoggedSetter = useSetRecoilState(userLogged);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(false);
  const goTo = useGoTo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      setError("Por favor ingrese una contraseña");
      return;
    }

    setLoader(true);
    const apiToken = await useGetToken(email, password);
    if (apiToken.token) {
      setToken(apiToken.token);
      userLoggedSetter(true);
      setLoader(false);
      goTo("/home");
    } else {
      setError("Contraseña incorrecta"); // Actualizamos el mensaje de error
      setLoader(false); // Importante: también debemos desactivar el loader en caso de error
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(""); // Limpiar el error al cambiar el valor del campo
  };

  useEffect(() => {
    setImage(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Correo electrónico
              <input
                className={styles.input}
                type="email"
                id="email"
                placeholder={email}
                readOnly
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              Contraseña
              <input
                className={styles.input}
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleChange}
              />
              {error && <p className={styles.error}>{error}</p>}
            </label>
          </div>
          <FormButton>Iniciar sesión</FormButton>
        </form>
      </div>
      {image && <div className={styles.imageContainer}></div>}
    </div>
  );
};
