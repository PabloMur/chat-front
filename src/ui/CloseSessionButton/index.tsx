import css from "./styles.module.css";
import { useGoTo } from "../../hooks";
import { useSetRecoilState } from "recoil";
import { userLogged } from "../../atoms";

export const CloseSessionButton = () => {
  const sessionSetter = useSetRecoilState(userLogged);
  const goto = useGoTo();
  const handleClick = () => {
    localStorage.clear();
    sessionSetter(false);
    window.history.replaceState(null, "", "/login");
    window.location.reload();
    window.location.href = "/";
    goto("/");
  };
  return (
    <div className={css.root}>
      <button className={css.closeButton} onClick={handleClick}>
        Cerrar Sesion
      </button>
    </div>
  );
};
