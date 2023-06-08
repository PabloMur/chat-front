import css from "./styles.module.css";
export const SignupForm = () => {
  return (
    <>
      <div className={css.root}>
        <form className={css.form}>
          <label htmlFor="">
            <p>Email</p>
            <input type="text" />
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
