import React from "react";

import styles from "./Services.module.css";

import carWashImg from "../../assets/images/full-service-car-clean-pic.jpg";
import headlightImg from "../../assets/images/headlight-restoration-pic.jpg";
import dentImg from "../../assets/images/scratch-and-dent-removal-pic.jpg";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const Services = () => {
  return (
    <div className={`section ${styles.services}`} id="services">
      <SectionHeader text="Our Services" color="white" />
      <div className={styles.services__cards}>
        <ServiceCard
          imageUrl={carWashImg}
          title="Full Service Car Wash"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna."
        />
        <ServiceCard
          imageUrl={headlightImg}
          title="Headlight Restoration"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna."
        />
        <ServiceCard
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
