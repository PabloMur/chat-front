import css from "./styles.module.css";
import { userLogged } from "../../atoms";
import { RoomCode } from "../RoomCode";
import { MessageSender } from "../MessageSender";
import { MessagesPanel } from "../MessagesPanel";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useGoTo } from "../../hooks";
import { ShareCodeBanner } from "../ShareCode";
import { Modal } from "../modal";
import { Loader } from "../loader";

//Este el el codigo de tu sala, compartelo con la persona que quieres hablar...
export function RoomPanel() {
  const userIsLogged = useRecoilValue(userLogged);
  const goTo = useGoTo();
  useEffect(() => {
    if (!userIsLogged) goTo("/");
  }, []);
  return (
    <>
      <div className={css.root}>
        <Loader />
        <div className={css.codeContainer}>
          <RoomCode />
        </div>
        <ShareCodeBanner />
        <div className={css.messagesContainer}>
          <MessagesPanel />
        </div>
        <MessageSender />
        <Modal />
      </div>
    </>
  );
}
