import { Menu } from "../../components/Menu";
import { MyRoomsPanel } from "../../components/MyRoomsPanel";
import css from "./styles.module.css";
export const MyRoomsPage = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
        <MyRoomsPanel />
      </div>
    </>
  );
};
