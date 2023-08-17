import { useRecoilValue, useSetRecoilState } from "recoil";
import css from "./styles.module.css";
import { loaderAtom } from "../../atoms/uiAtoms";
import { useDeleteUser, useGoTo } from "../../hooks";
import { userLogged, userTokenAtom } from "../../atoms";
export const DeleteUserButton = () => {
  const token = useRecoilValue(userTokenAtom);
  const setLoader = useSetRecoilState(loaderAtom);
  const sessionSetter = useSetRecoilState(userLogged);
  const goto = useGoTo();

  const handleClick = async () => {
    setLoader(true);
    const userDeleted = await useDeleteUser(token);
    localStorage.clear();
    sessionSetter(false);
    window.history.replaceState(null, "", "/login");
    window.location.reload();
    window.location.href = "/";
    if (userDeleted) {
      setLoader(true);
      goto("/");
    }
  };
  return (
    <>
      <button onClick={handleClick} className={css.button}>
        Eliminar Cuenta
      </button>
    </>
  );
};
