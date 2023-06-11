import css from "./styles.module.css";
import { Menu } from "../../components/Menu";
import { SettingsPanel } from "../../components/SettingsPanel";

export const SettingsPage = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
        <SettingsPanel />
      </div>
    </>
  );
};
