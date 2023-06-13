import { useSetRecoilState } from "recoil";
import css from "./styles.module.css";
import { loaderAtom } from "../../atoms/uiAtoms";
import { Loader } from "../loader";
import { useGetInRoom } from "../../hooks";

export const GetInRoomPanel = () => {
  const loaderSetter = useSetRecoilState(loaderAtom);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loaderSetter(true);
    console.log(e.target.room.value);
    await useGetInRoom(e.target.room.value);
    loaderSetter(false);
  };
  return (
    <>
      <div className={css.root}>
        <Loader />
        <h2>Ingresa el codigo de la sala</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            <p>Room Code</p>
            <input type="text" name="room" />
          </label>
          <button>Ingresar</button>
        </form>
      </div>
    </>
  );
};
