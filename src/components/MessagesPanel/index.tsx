import css from "./styles.module.css";
import { realtimeDataBase, ref, onValue } from "../../lib/firebaseConn";
import { useRecoilValue } from "recoil";
import { realtimeRoomIdAtom } from "../../atoms";
import { useEffect, useState, useRef } from "react";
import Message from "../Message";

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
        {messages.map((message: any) => {
          const messageText = message.message;
          return (
            <li key={Math.random()}>
              {message.from === "owner" ? (
                <Message isOwner={true} text={messageText} />
              ) : (
                <Message isOwner={false} text={messageText} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
