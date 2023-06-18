import css from "./styles.module.css";
import {} from "../../atoms";
import { RoomCode } from "../RoomCode";
import { MessageSender } from "../MessageSender";
import { ShareCodeBanner } from "../ShareCode";
import { MessagesPanel } from "../MessagesPanel";

//Este el el codigo de tu sala, compartelo con la persona que quieres hablar...
export function RoomPanel() {
  return (
    <>
      <div className={css.root}>
        <div className={css.codeContainer}>
          <RoomCode />
        </div>
        <div className={css.messagesContainer}></div>
        <MessagesPanel />
        <ShareCodeBanner />
        <MessageSender />
      </div>
    </>
  );
}
