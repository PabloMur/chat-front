import styles from "./styles.module.css";
import { emailAtom } from "../../atoms";
import { useRecoilValue } from "recoil";

export const LoginForm = () => {
  const email = useRecoilValue(emailAtom);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Iniciar sesión</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Correo electrónico
            <input
              className={styles.input}
              type="email"
              id="email"
              value={email}
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
