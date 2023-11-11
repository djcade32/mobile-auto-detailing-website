import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ title, description, imageUrl, serviceCardContainerStyle }) => {
  return (
    <div className={styles.serviceCard} style={{ ...serviceCardContainerStyle }}>
      <div className={styles.serviceCard__imgContainer}>
        <div className="app__overlay" />
        <img src={imageUrl} alt="car wash" className={styles.serviceCard__img} />
      </div>
      <div className={styles.serviceCard__description}>
        <p className={styles.serviceCard__description_header}>{title}</p>
        <p className={styles.serviceCard__description_paragraph}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
