import React from "react";
import styles from "./Hero.module.css";
import Button from "../../components/button/Button";

const Hero = () => {
  const scrollToPackagesSection = () => {
    let section = document.getElementById("packages");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styles.hero} section`} id="home">
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
          onClick={scrollToPackagesSection}
          color="var(--accent)"
          textColor="white"
          buttonContainer={{ fontSize: "var(--fontSize-header)", fontWeight: "bold" }}
          hoverColor="var(--accent-hover)"
        />
      </div>
    </div>
  );
};

export default Hero;
