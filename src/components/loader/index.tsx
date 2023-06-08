import { useRecoilValue } from "recoil";
import css from "./styles.module.css";
import { loaderAtom } from "../../atoms/uiAtoms";
export const Loader = () => {
  let isActive = useRecoilValue(loaderAtom) ? "active" : "deactive";
  const classes = [css.root, css[isActive]].join(" ");
  return (
    <>
      <div className={classes}>
        <h3>Cargando</h3>
        <iframe
          src="https://giphy.com/embed/VIfKkSJDf4yroE6QcR"
          width="60px"
          height="60px"
          className={css.iframe}
        />
      </div>
    </>
  );
};
