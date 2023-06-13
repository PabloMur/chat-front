import css from "./styles.module.css";
import { GetInRoomPanel } from "../../components/GetInRoomPanel";
import { Menu } from "../../components/Menu";

export const GetInRoomPage = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
        <GetInRoomPanel />
      </div>
    </>
  );
};
