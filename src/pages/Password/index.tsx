import css from "./styles.module.css";
import { LoginForm } from "../../components/LoginForm";
import { Loader } from "../../components/loader";
export const PasswordPage = () => {
  return (
    <>
      <div className={css.root}>
        <Loader />
        <LoginForm />
      </div>
    </>
  );
};
