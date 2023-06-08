import { SignupForm } from "../../components/SignupForm";
import css from "./styles.module.css";
export const SignupPage = () => {
  return (
    <>
      <div className={css.root}>
        <SignupForm />
      </div>
    </>
  );
};
