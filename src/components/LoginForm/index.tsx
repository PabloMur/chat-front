import styles from "./styles.module.css";
import { emailAtom, userLogged, userTokenAtom } from "../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useGetToken, useGoTo } from "../../hooks";
import { useState } from "react";
import { loaderAtom } from "../../atoms/uiAtoms";

export const LoginForm = () => {
  const email = useRecoilValue(emailAtom);
  const setToken = useSetRecoilState(userTokenAtom);
  const setLoader = useSetRecoilState(loaderAtom);
  const userLoggedSetter = useSetRecoilState(userLogged);
  const [password, setPassword] = useState("");
  const goTo = useGoTo();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    const apiToken = await useGetToken(email, password);
    setToken(apiToken.token);
    userLoggedSetter(true);
    setLoader(false);
    goTo("/home");
  };

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
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
              onChange={handleChange}
            />
          </label>
        </div>
        <button className={styles.button} type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
