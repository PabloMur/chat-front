import { useRecoilValue } from "recoil";
import { useSendMessage } from "../../hooks";
import css from "./styles.module.css";
import { realtimeRoomIdAtom, userTokenAtom } from "../../atoms";

export const MessageSender = () => {
  const token = useRecoilValue(userTokenAtom);
  const chatroomId = useRecoilValue(realtimeRoomIdAtom);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const message = {
      roomId: chatroomId,
      from: "owner",
      message: e.target.message.value,
    };
    await useSendMessage(message, token);
  };
  return (
    <>
      <div className={css.root}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input type="text" name="message" className={css.input} />
          <button className={css.button}>send</button>
        </form>
      </div>
    </>
  );
};
