import css from "./styles.module.css";
import { useGoTo } from "../../hooks";

export const Logo = () => {
  const goto = useGoTo();
  const handleClick = () => {
    goto("/home");
  };
  return (
    <>
      <div className={css.root} onClick={handleClick}>
        <h2>Chat-Land</h2>
      </div>
    </>
  );
};
