import styles from "./styles.module.css";
import { emailAtom, userLogged, userTokenAtom } from "../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useGetToken, useGoTo } from "../../hooks";
import { useState } from "react";
import { loaderAtom } from "../../atoms/uiAtoms";
import { FormButton } from "../../ui/FormButton";

export const LoginForm = () => {
  const email = useRecoilValue(emailAtom);
  const setToken = useSetRecoilState(userTokenAtom);
  const setLoader = useSetRecoilState(loaderAtom);
  const userLoggedSetter = useSetRecoilState(userLogged);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Nuevo estado para manejar el error de validación
  const goTo = useGoTo();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validar el campo de la contraseña antes de enviar el formulario
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
      alert("contraseña incorrecta");
    }
  };

  const handleChange = (e: any) => {
    setPassword(e.target.value);
    setError(""); // Limpiar el error al cambiar el valor del campo
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
            {error && <p className={styles.error}>{error}</p>}{" "}
            {/* Mostrar el mensaje de error */}
          </label>
        </div>
        <FormButton>Iniciar sesión</FormButton>
      </form>
    </div>
  );
};
