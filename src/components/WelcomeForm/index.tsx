import styles from "./styles.module.css";
import { useCheckEmail, useGoTo } from "../../hooks";
import { emailAtom } from "../../atoms";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";

export const WelcomeForm = () => {
  const [email, setEmail] = useRecoilState(emailAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const goTo = useGoTo();

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
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};
