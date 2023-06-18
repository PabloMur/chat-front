import css from "./styles.module.css";
import { realtimeDataBase, ref, onValue } from "../../lib/firebaseConn";
import { useRecoilValue } from "recoil";
import { realtimeRoomIdAtom } from "../../atoms";
import { useEffect, useState, useRef } from "react";

type MessageType = {
  from: string;
  message: string;
};

export const MessagesPanel = () => {
  const chatroomId = useRecoilValue(realtimeRoomIdAtom);
  const db = realtimeDataBase;
  const chatroomRef = ref(db, "rooms/" + chatroomId + "/messages");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    onValue(chatroomRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setMessages(data);
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className={css.root} ref={messagesContainerRef}>
      <ul>
        {messages.map((message: MessageType) => (
          <li key={Math.random()}>
            {message.from == "owner" ? (
              <div className={css.owner}>
                <div className={css.message}>{message.message}</div>
              </div>
            ) : (
              <div className={css.guest}>
                <div className={css.message}>{message.message}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
