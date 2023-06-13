import { UserImage } from "../../ui/UserImage";
import css from "./styles.module.css";
export const ProfilePanel = () => {
  return (
    <>
      <div className={css.root}>
        <UserImage />
      </div>
    </>
  );
};
