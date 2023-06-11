import { Menu } from "../../components/Menu";
import { RoomPanel } from "../../components/RoomPanel";
import css from "./styles.module.css";
export const RoomPage = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
        <RoomPanel />
      </div>
    </>
  );
};
