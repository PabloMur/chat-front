import { UserEmail } from "../../ui/UserEmail";
import { UserImage } from "../../ui/UserImage";
import { UserName } from "../../ui/UserName";
import css from "./styles.module.css";
import { useGoTo } from "../../hooks";

export const ProfilePanel = () => {
  const goTo = useGoTo();
  const handleClick = () => {
    goTo("/settings");
  };
  return (
    <>
      <div className={css.root}>
        <UserImage />
        <div>
          <UserName />
          <UserEmail />
          <button className={css.editButton} onClick={handleClick}>
            Editar Datos
          </button>
        </div>
      </div>
    </>
  );
};
