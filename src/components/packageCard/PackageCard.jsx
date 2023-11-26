import React, { useEffect, useState } from "react";

import styles from "./PackageCard.module.css";
import { BsCheckLg } from "react-icons/bs";
import Button from "../button/Button";
import { AllPackageFeatures } from "../../enums/Packages.enums";
import Modal from "../modal/Modal";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { toSnakeCase } from "../../helpers/strings";

const packages = {
  NO_THANK_YOU: { name: "No thank you", link: "superior" },
  HEADLIGHT_RESTORATION: { name: "Headlight Restoration", link: "superior" },
  DENT_REMOVAL: { name: "Dent Removal", link: "superior" },
  SCRATCH_REMOVAL: { name: "Scratch Removal", link: "superior" },
};

const PackageCard = ({ packageInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedPackage, setSelectedPackage] = useState(packages.NO_THANK_YOU);

  useEffect(() => {
    const setWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  const determineSelectedPackage = (selected) => {
    const { HEADLIGHT_RESTORATION, DENT_REMOVAL, SCRATCH_REMOVAL, NO_THANK_YOU } = packages;
    switch (selected) {
      case HEADLIGHT_RESTORATION.name:
        setSelectedPackage(HEADLIGHT_RESTORATION);
      case DENT_REMOVAL.name:
        setSelectedPackage(DENT_REMOVAL);
      case SCRATCH_REMOVAL.name:
        setSelectedPackage(SCRATCH_REMOVAL);
      default:
        setSelectedPackage(NO_THANK_YOU);
    }
  };

  const checkboxComponent = (option) => {
    const snakeCaseString = toSnakeCase(option);
    return (
      <div className={styles.packageCard__extraServicesModal_content_option}>
        {selectedPackage.name === option ? (
          <MdCheckBox size={40} color="var(--green)" cursor="pointer" />
        ) : (
          <MdCheckBoxOutlineBlank
            size={40}
            color="var(--gray)"
            cursor="pointer"
            onClick={() => setSelectedPackage(packages[snakeCaseString])}
          />
        )}
        <div>
          <p>{option}</p>
        </div>
      </div>
    );
  };

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
                {checkboxComponent("No thank you")}
                {checkboxComponent("Headlight Restoration")}
                {checkboxComponent("Dent Removal")}
                {checkboxComponent("Scratch Removal")}
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
                onClick={() => {
                  setIsOpen(false);
                  setSelectedPackage(packages.NO_THANK_YOU);
                }}
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
                onClick={() =>
                  (window.location.href = `https://calendly.com/normancade/${selectedPackage.link}`)
                }
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PackageCard;
