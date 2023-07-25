import css from "./styles.module.css";

export const DeleteRoomButton = ({ id }: any) => {
  let roomId = id;
  const handleClick = () => {
    alert(roomId);
  };
  return (
    <>
      <div className={css.root} onClick={handleClick}>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    </>
  );
};
