import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, buttonContainer, color, textColor }) => {
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
      <p style={{ color: textColor }}>{title}</p>
    </div>
  );
};

export default Button;
