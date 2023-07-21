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
          <div className={css.labelsContainer}>
            <div className={css.cont1}>
              <label>
                <p>Imagen de perfil</p>
                <input className={css.pic} type="text" />
              </label>
            </div>
            <div className={css.cont2}>
              <label>
                <p>Nombre</p>
                <input className={css.input} type="text" />
              </label>
              <label>
                <p>Email</p>
                <input className={css.input} type="text" />
              </label>
              <button className={css.button}>Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
