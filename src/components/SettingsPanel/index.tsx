import css from "./styles.module.css";
//hacer que line sea un componente de ui
//tambien ver si puedo hacer que los inputs y button sean componentes de ui
export const SettingsPanel = () => {
  return (
    <>
      <div className={css.root}>
        <form className={css.form}>
          <h1>Configuracion de perfil</h1>
          <div className={css.line}></div>
          <label>
            <p>Imagen de perfil</p>
            <input className={css.pic} type="text" />
          </label>
          <label>
            <p>Nombre</p>
            <input className={css.input} type="text" />
          </label>
          <label>
            <p>Email</p>
            <input className={css.input} type="text" />
          </label>
          <button className={css.button}>Guardar</button>
        </form>
      </div>
    </>
  );
};
