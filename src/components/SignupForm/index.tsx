import css from "./styles.module.css";
import { emailAtom } from "../../atoms";
import { useRecoilValue } from "recoil";
export const SignupForm = () => {
  const email = useRecoilValue(emailAtom);
  return (
    <>
      <div className={css.root}>
        <form className={css.form}>
          <label htmlFor="">
            <p>Email</p>
            <input type="text" value={email} />
          </label>
          <label htmlFor="">
            <p>Ingresa una contraseña</p>
            <input type="text" />
          </label>
          <label htmlFor="">
            <p>Repite la contraseña</p>
            <input type="text" />
          </label>
          <button>Registrame</button>
        </form>
      </div>
    </>
  );
};
