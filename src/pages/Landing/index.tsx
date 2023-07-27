import css from "./styles.module.css";
import { useGoTo } from "../../hooks";

export const Landing = () => {
  const goTo = useGoTo();
  const handleClick = () => {
    goTo("/email");
  };
  return (
    <>
      <div className={css.root}>
        <div className={css.titleContainer}>
          <h1>Bienvenido a ChatLand</h1>
          <p>
            "Donde las conversaciones fluyen y las risas nunca faltan. Únete a
            la fiesta de chatear."
          </p>
          <button className={css.comenzarButton} onClick={handleClick}>
            Comenzar!
          </button>
        </div>
        <div className={css.imageContainer}></div>
      </div>
    </>
  );
};
