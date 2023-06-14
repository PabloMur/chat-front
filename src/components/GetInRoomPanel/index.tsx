import css from "./styles.module.css";
import { Loader } from "../loader";
import { GetInForm } from "../GetInForm";

export const GetInRoomPanel = () => {
  return (
    <>
      <div className={css.root}>
        <Loader />
        <GetInForm />
      </div>
    </>
  );
};
