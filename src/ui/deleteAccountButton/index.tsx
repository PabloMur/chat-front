import { useSetRecoilState } from "recoil";
import css from "./styles.module.css";
import { loaderAtom } from "../../atoms/uiAtoms";
export const DeleteUserButton = () => {
  const setLoader = useSetRecoilState(loaderAtom);
  const handleClick = async () => {
    setLoader(true);
    alert("Deleting Account");
  };
  return (
    <>
      <button onClick={handleClick} className={css.button}>
        Eliminar Cuenta
      </button>
    </>
  );
};
