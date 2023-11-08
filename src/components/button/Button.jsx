import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, buttonContainer, color }) => {
  return (
    <div
      className={styles.button}
      style={
        buttonContainer
          ? { ...buttonContainer, backgroundColor: color }
          : { backgroundColor: color }
      }
      onClick={onClick}
    >
      <p>{title}</p>
    </div>
  );
};

export default Button;
