import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, buttonContainer, color, textColor, hoverColor }) => {
  return (
    <button
      className={styles.button}
      type="button"
      style={{ ...buttonContainer, color: textColor, backgroundColor: color }}
      onClick={onClick}
      onMouseOver={({ target }) => (target.style.backgroundColor = hoverColor)}
      onMouseOut={({ target }) => (target.style.backgroundColor = color)}
    >
      {title}
    </button>
  );
};

export default Button;
