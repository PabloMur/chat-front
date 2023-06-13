import { Options } from "../Options";
import { Loader } from "../loader";
import css from "./styles.module.css";
export const HomePanel = () => {
  return (
    <>
      <div className={css.root}>
        <Loader />
        <Options />
      </div>
    </>
  );
};
