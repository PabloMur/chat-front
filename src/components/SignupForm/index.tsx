import css from "./styles.module.css";
import { emailAtom } from "../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { equalText } from "../../lib/auxFunctions";
import { useCreateUser, useGoTo } from "../../hooks";
import { loaderAtom } from "../../atoms/uiAtoms";
export const SignupForm = () => {
  const email = useRecoilValue(emailAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const goTo = useGoTo();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const pass1 = e.target.passOne.value;
    const pass2 = e.target.passTwo.value;
    const equalPass = equalText(pass1, pass2);
    if (equalPass) {
      loaderSetter(true);
      await useCreateUser(email, pass1);
      loaderSetter(false);
      goTo("/home");
    }
  };

  return (
    <>
      <div className={css.root}>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            <p>Email</p>
            <input type="text" value={email} required className={css.input} />
          </label>
          <label className={css.label}>
            <p>Ingresa una contraseña</p>
            <input
              type="password"
              name="passOne"
              required
              className={css.input}
            />
          </label>
          <label className={css.label}>
            <p>Repite la contraseña</p>
            <input
              type="password"
              name="passTwo"
              required
              className={css.input}
            />
          </label>
          <button className={css.button}>Registrame</button>
        </form>
      </div>
    </>
  );
};
