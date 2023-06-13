import css from "./styles.module.css";

export const MessageSender = () => {
  return (
    <>
      <div className={css.root}>
        <form className={css.form}>
          <input type="text" name="message" className={css.input} />
          <button className={css.button}>send</button>
        </form>
      </div>
    </>
  );
};
