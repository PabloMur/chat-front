import styles from "./styles.module.css";
import { useCheckEmail, useGoTo } from "../../hooks";
import { emailAtom, userLogged } from "../../atoms";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { FormButton } from "../../ui/FormButton";

export const WelcomeForm = () => {
  const [email, setEmail] = useRecoilState(emailAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const goTo = useGoTo();
  const userIsLogged = useRecoilValue(userLogged);

  useEffect(() => {
    if (userIsLogged) goTo("/home");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loaderSetter(true);
    let test = await useCheckEmail(email);
    loaderSetter(false);
    test.exists ? goTo("/password") : goTo("/signup");
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Ingresa Tu Email:</h1>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <FormButton>Enviar</FormButton>
      </form>
    </div>
  );
};
