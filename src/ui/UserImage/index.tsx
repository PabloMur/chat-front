import css from "./styles.module.css";

export const UserImage = () => {
  return (
    <>
      <div className={css.root}>
        <img
          className={css.img}
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          alt=""
        />
      </div>
    </>
  );
};
