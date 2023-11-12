import React from "react";

import styles from "./PackageCard.module.css";
import { BsCheckLg } from "react-icons/bs";
import Button from "../button/Button";
import { AllPackageFeatures } from "../../enums/Packages.enums";

const PackageCard = ({ packageInfo }) => {
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
          onClick={() => {}}
          buttonContainer={{
            fontSize: "var(--fontSize-header)",
            fontWeight: "bold",
            marginTop: "var(--spacing-2)",
          }}
        />
      </div>
    </div>
  );
};

export default PackageCard;
