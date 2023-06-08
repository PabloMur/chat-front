import css from "./styles.module.css";
import { HomePanel } from "../../components/homePanel";
export const HomePage = () => {
  return (
    <>
      <div className={css.root}>
        <HomePanel />
      </div>
    </>
  );
};
