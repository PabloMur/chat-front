import React, { useEffect, useState } from "react";
import css from "./styles.module.css";

interface MessageProps {
  text: string;
  isOwner: boolean;
  isNew: boolean;
}

const Owner: React.FC<{ text: string; isNew: boolean }> = ({ text, isNew }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isNew) {
      setIsAnimated(true);
    }
  }, [isNew]);

  const classes = `${css.ownerContainer} ${isAnimated ? css.fadeIn : ""}`;

  return (
    <div className={classes}>
      <div className={css.owner}>{text}</div>
    </div>
  );
};

const Guest: React.FC<{ text: string; isNew: boolean }> = ({ text, isNew }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isNew) {
      setIsAnimated(true);
    }
  }, [isNew]);

  const classes = `${css.guestContainer} ${isAnimated ? css.fadeIn : ""}`;

  return (
    <div className={classes}>
      <div className={css.guest}>{text}</div>
    </div>
  );
};

const Message: React.FC<MessageProps> = ({ text, isOwner, isNew }) => {
  return (
    <div className={css.root}>
      {isOwner ? (
        <Owner text={text} isNew={isNew} />
      ) : (
        <Guest text={text} isNew={isNew} />
      )}
    </div>
  );
};

export default Message;
