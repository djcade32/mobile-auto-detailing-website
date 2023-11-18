import React, { useEffect, useState } from "react";

import styles from "./PackageCard.module.css";
import { BsCheckLg } from "react-icons/bs";
import Button from "../button/Button";
import { AllPackageFeatures } from "../../enums/Packages.enums";
import Modal from "../modal/Modal";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const PackageCard = ({ packageInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div className={styles.packageCard}>
      <div className={styles.packageCard__header}>
        <div>
          <p className={styles.packageCard__header_title}>{packageInfo.name}</p>
        </div>
        <div className={styles.packageCard__header_prices}>
          <div className={styles.packageCard__header_prices_price}>
            <p>Cars</p>
            <p>${packageInfo.prices.Cars}</p>
          </div>
          <div className={styles.packageCard__header_prices_divider} />
          <div className={styles.packageCard__header_prices_price}>
            <p>SUVs</p>
            <p>${packageInfo.prices.Suv}</p>
          </div>
          <div className={styles.packageCard__header_prices_divider} />
          <div className={styles.packageCard__header_prices_price}>
            <p>Van/Truck</p>
            <p>${packageInfo.prices.Van_and_truck}</p>
          </div>
        </div>
      </div>
      <div className={styles.packageCard__content}>
        <div className={styles.packageCard__content_features}>
          {AllPackageFeatures.map((feature) => (
            <div key={feature} className={styles.packageCard__content_features_feature}>
              <div>
                <BsCheckLg
                  size={50}
                  color={packageInfo.features.includes(feature) ? "var(--green)" : "var(--gray)"}
                />
              </div>
              <p
                style={{
                  color: packageInfo.features.includes(feature) ? "var(--primary)" : "var(--gray)",
                }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
        <Button
          title="Book Now"
          color="var(--primary)"
          textColor="white"
          onClick={() => setIsOpen(true)}
          buttonContainer={{
            fontSize: "var(--fontSize-header)",
            fontWeight: "bold",
            marginTop: "var(--spacing-2)",
          }}
          hoverColor="var(--primary-hover)"
        />

        {/* Add-on pop-up modal */}
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <div className={styles.packageCard__extraServicesModal}>
            <div className={styles.packageCard__extraServicesModal_header}>
              <p>Add-Ons</p>
            </div>
            <div className={styles.packageCard__extraServicesModal_content}>
              <div>
                <p className={styles.packageCard__extraServicesModal_content_question}>
                  Would you like to add extra services?
                </p>
              </div>
              <div className={styles.packageCard__extraServicesModal_content_options}>
                <div className={styles.packageCard__extraServicesModal_content_option}>
                  <MdCheckBox size={40} color="var(--green)" cursor="pointer" />
                  <div>
                    <p>No thank you</p>
                  </div>
                </div>
                <div className={styles.packageCard__extraServicesModal_content_option}>
                  <MdCheckBoxOutlineBlank size={40} color="var(--gray)" cursor="pointer" />
                  <div>
                    <p>Headlight Restoration</p>
                  </div>
                </div>
                <div className={styles.packageCard__extraServicesModal_content_option}>
                  <MdCheckBoxOutlineBlank size={40} color="var(--gray)" cursor="pointer" />
                  <div>
                    <p>Dent Removal</p>
                  </div>
                </div>
                <div className={styles.packageCard__extraServicesModal_content_option}>
                  <MdCheckBoxOutlineBlank size={40} color="var(--gray)" cursor="pointer" />
                  <div>
                    <p>Scratch Removal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.packageCard__extraServicesModal_content_buttons}>
              <Button
                title="Cancel"
                color="var(--primary)"
                textColor="white"
                buttonContainer={{
                  fontSize: "var(--fontSize-subtitle)",
                  width: windowWidth < 630 ? "100%" : 150,
                }}
                hoverColor="var(--primary-hover)"
                onClick={() => setIsOpen(false)}
              />
              <Button
                title="Next"
                color="var(--accent)"
                textColor="white"
                buttonContainer={{
                  fontSize: "var(--fontSize-subtitle)",
                  width: windowWidth < 630 ? "100%" : 150,
                }}
                hoverColor="var(--accent-hover)"
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PackageCard;
