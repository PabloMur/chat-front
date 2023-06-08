import css from "./styles.module.css";
import { LoginForm } from "../../components/LoginForm";
export const PasswordPage = () => {
  return (
    <>
      <div className={css.root}>
        <LoginForm />
      </div>
    </>
  );
};
