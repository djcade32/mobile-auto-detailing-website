import React from "react";
import styles from "./Hero.module.css";
import Button from "../../components/button/Button";
import Services from "../services/Services";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="app__overlay" />
      <div className={styles.hero__content}>
        <div>
          <p className={styles.hero__content_header}>
            <span style={{ color: "var(--accent)" }}>Bringing</span> the <br /> Shine to Your
            <span style={{ color: "var(--accent)" }}> Doorstep</span>
          </p>
          <p className={styles.hero__content_subtitle}>
            We bring expert detailing right to your doorstep, ensuring your vehicle shines
            brilliantly without disrupting your day
          </p>
        </div>
        <Button
          title="Book Now"
          onClick={() => {}}
          color="var(--accent)"
          buttonContainer={{ fontSize: "var(--fontSize-header)", fontWeight: "bold" }}
        />
      </div>
    </div>
  );
};

export default Hero;
