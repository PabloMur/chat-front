import { UserEmail } from "../../ui/UserEmail";
import { UserImage } from "../../ui/UserImage";
import { UserName } from "../../ui/UserName";
import css from "./styles.module.css";
export const ProfilePanel = () => {
  return (
    <>
      <div className={css.root}>
        <UserImage />
        <UserName />
        <UserEmail />
      </div>
    </>
  );
};
