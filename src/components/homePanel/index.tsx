import { Options } from "../Options";
import css from "./styles.module.css";
export const HomePanel = () => {
  return (
    <>
      <div className={css.root}>
        <Options />
      </div>
    </>
  );
};
