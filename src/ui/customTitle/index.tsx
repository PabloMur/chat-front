import css from "./styles.module.css";
export const CustomTitle = ({ children }: any) => {
  return (
    <>
      <div className={css.title}>{children}</div>
    </>
  );
};
