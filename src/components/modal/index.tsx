import css from "./styles.module.css";
export function Modal() {
  return (
    <>
      <div className={css.modalContainer}>
        <button className={css.deleteButton}>Eliminar Sala</button>
      </div>
    </>
  );
}
