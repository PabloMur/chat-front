import css from "./styles.module.css";
import { emailAtom, userLogged, userTokenAtom } from "../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { equalText } from "../../lib/auxFunctions";
import { useCreateUser, useGetToken, useGoTo } from "../../hooks";
import { loaderAtom } from "../../atoms/uiAtoms";
export const SignupForm = () => {
  const email = useRecoilValue(emailAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const goTo = useGoTo();
  const userLoggedSetter = useSetRecoilState(userLogged);
  const setToken = useSetRecoilState(userTokenAtom);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const pass1 = e.target.passOne.value;
    const pass2 = e.target.passTwo.value;
    const equalPass = equalText(pass1, pass2);
    if (equalPass) {
      loaderSetter(true);
      await useCreateUser(email, pass1);
      const apiToken = await useGetToken(email, pass1);
      setToken(apiToken.token);
      userLoggedSetter(true);
      loaderSetter(false);
      goTo("/home");
    }
  };

  return (
    <>
      <div className={css.root}>
        <form className={css.form} onSubmit={handleSubmit}>
          <h2 className={css.formTitle}>Registrate</h2>
          <label className={css.label}>
            <p className={css.labelTitle}>Email</p>
            <input type="text" value={email} required className={css.input} />
          </label>
          <label className={css.label}>
            <p className={css.labelTitle}>Ingresa una contraseña</p>
            <input
              type="password"
              name="passOne"
              required
              className={css.input}
            />
          </label>
          <label className={css.label}>
            <p className={css.labelTitle}>Repite la contraseña</p>
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
