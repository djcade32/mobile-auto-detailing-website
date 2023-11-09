import React from "react";

import styles from "./Services.module.css";

import carWashImg from "../../assets/images/full-service-car-clean-pic.jpg";
import headlightImg from "../../assets/images/headlight-restoration-pic.jpg";
import dentImg from "../../assets/images/scratch-and-dent-removal-pic.jpg";
import Card from "../../components/card/Card";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.services__header}>
        <p>Our Services</p>
      </div>
      <div className={styles.services__cards}>
        <Card
          imageUrl={carWashImg}
          title="Full Service Car Wash"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna."
        />
        <Card
          imageUrl={headlightImg}
          title="Headlight Restoration"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna."
        />
        <Card
          imageUrl={dentImg}
          title="Dent & Scratch Removal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna."
        />
      </div>
    </div>
  );
};

export default Services;
