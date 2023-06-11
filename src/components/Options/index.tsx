import { useGoTo } from "../../hooks";
import css from "./styles.module.css";

export const Options = () => {
  const goto = useGoTo();
  return (
    <>
      <div className={css.root}>
        <div className={css.textContainer}>
          <h2>Welcome</h2>
        </div>
        <div className={css.buttonsContainer}>
          <button
            onClick={() => {
              goto("/room/1234");
            }}
          >
            Crear una Sala
          </button>
          <button
            onClick={() => {
              goto("/settings");
            }}
          >
            Ingresar a una Sala
          </button>
        </div>
      </div>
    </>
  );
};
