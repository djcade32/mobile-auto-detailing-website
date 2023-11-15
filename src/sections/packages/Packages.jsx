import React, { useEffect } from "react";

import styles from "./Packages.module.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import PackageCard from "../../components/packageCard/PackageCard";
import { PackagesFeatures } from "../../enums/Packages.enums";

const packagesData = [
  {
    name: "Standard",
    prices: {
      Cars: 85,
      Suv: 95,
      Van_and_truck: 115,
    },
    features: PackagesFeatures.STANDARD,
  },
  {
    name: "Deluxe",
    prices: {
      Cars: 110,
      Suv: 120,
      Van_and_truck: 140,
    },
    features: PackagesFeatures.DELUXE,
  },
  {
    name: "Premium",
    prices: {
      Cars: 165,
      Suv: 180,
      Van_and_truck: 220,
    },
    features: PackagesFeatures.PREMIUM,
  },
];

const Packages = () => {
  return (
    <div className={`section ${styles.packages}`} id="packages">
      <SectionHeader text="Packages" color="var(--primary)" />
      <div className={styles.packages__cards}>
        {packagesData.map((p, index) => (
          <PackageCard key={index} packageInfo={p} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
