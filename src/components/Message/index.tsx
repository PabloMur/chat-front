import React from "react";
import css from "./styles.module.css";

interface MessageProps {
  text: string;
  isOwner: boolean;
}

const Owner = ({ text }: any) => {
  return (
    <div className={css.ownerContainer}>
      <div className={css.owner}>{text}</div>
    </div>
  );
};
const Guest = ({ text }: any) => {
  return (
    <div className={css.guestContainer}>
      <div className={css.guest}>{text}</div>
    </div>
  );
};

const Message: React.FC<MessageProps> = ({ text, isOwner }) => {
  return (
    <div className={css.root}>
      {isOwner ? <Owner text={text} /> : <Guest text={text} />}
    </div>
  );
};

export default Message;
