import React from "react";
import styles from "./styles.module.css";

type Position = "top" | "bottom";

interface CircleProps {
  position: Position;
}

const Circle: React.FC<CircleProps> = ({ position }) => {
  return (
    <div
      className={`${styles.circle} ${
        position === "bottom" ? styles.bottom : styles.top
      }`}
    />
  );
};

export default Circle;
