import css from "./styles.module.css";
import { useGoTo } from "../../hooks";
import { BurgerButton } from "../../ui/BurguerButton";

export const Logo = () => {
  const goto = useGoTo();
  const handleClick = () => {
    goto("/home");
  };
  return (
    <>
      <div className={css.root}>
        <h2 onClick={handleClick}>Chat-Land</h2>
        <BurgerButton />
      </div>
    </>
  );
};
