import { SignupForm } from "../../components/SignupForm";
import { Loader } from "../../components/loader";
import css from "./styles.module.css";
export const SignupPage = () => {
  return (
    <>
      <div className={css.root}>
        <Loader />
        <SignupForm />
      </div>
    </>
  );
};
