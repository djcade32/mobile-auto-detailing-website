import React from "react";

import styles from "./Footer.module.css";
import logo from "../../assets/salford-logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content_imageContainer}>
          <img src={logo} alt="salford logo" />
        </div>
        <div className={styles.footer__content_links}>
          <div className={styles.footer__content_links_header}>
            <p>Welcome</p>
          </div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Packages</li>
            <li>Testimonials</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.footer__content_links}>
          <div className={styles.footer__content_links_header}>
            <p>Contact Us</p>
          </div>
          <ul>
            <p>Hours: 8am-5pm</p>
            <p>571-404-6209</p>
            <p>salford_detailing@gmail.com</p>
            <p>Servicing Triangle Area</p>
          </ul>
        </div>
      </div>
      <div className={styles.footer__copyrightContainer}>
        <p>
          Copyright © 2023 Salford Car Detailing. All rights reserved. | Website design: NC3 Designs
        </p>
      </div>
    </div>
  );
};

export default Footer;
