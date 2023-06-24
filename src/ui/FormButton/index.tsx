import css from "./styles.module.css";

export const FormButton = ({ children }: { children: React.ReactNode }) => {
  return <button className={css.button}>{children}</button>;
};
