import css from "./styles.module.css";
import { realtimeDataBase, ref, onValue } from "../../lib/firebaseConn";
import { useRecoilValue } from "recoil";
import { realtimeRoomIdAtom } from "../../atoms";
import { useEffect, useState } from "react";

type MessageType = {
  from: string;
  message: string;
};

export const MessagesPanel = () => {
  const chatroomId = useRecoilValue(realtimeRoomIdAtom);
  const db = realtimeDataBase;
  const chatroomRef = ref(db, "rooms/" + chatroomId + "/messages");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    onValue(chatroomRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      setMessages(data);
    });
  }, []);

  return (
    <div className={css.root}>
      <ul>
        {messages.map((message: MessageType) => (
          <li key={Math.random()}>
            {message.from == "owner" ? (
              <div className={css.owner}>{message.message}</div>
            ) : (
              message.message
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
