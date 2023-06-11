import { Menu } from "../../components/Menu";
import { ProfilePanel } from "../../components/ProfilePanel";
import css from "./styles.module.css";
export const ProfilePage = () => {
  return (
    <>
      <div className={css.root}>
        <Menu />
        <ProfilePanel />
      </div>
    </>
  );
};
