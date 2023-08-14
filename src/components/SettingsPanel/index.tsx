import css from "./styles.module.css";
import FileUploader from "../dropzoneCompTest";

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
                <FileUploader />
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
