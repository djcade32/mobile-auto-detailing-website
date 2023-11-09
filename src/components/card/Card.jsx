import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl, cardContainerStyle }) => {
  return (
    <div className={styles.card} style={{ ...cardContainerStyle }}>
      <div className={styles.card__imgContainer}>
        <div className="app__overlay" />
        <img src={imageUrl} alt="car wash" className={styles.card__img} />
      </div>
      <div className={styles.card__description}>
        <p className={styles.card__description_header}>{title}</p>
        <p className={styles.card__description_paragraph}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
