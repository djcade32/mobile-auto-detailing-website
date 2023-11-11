import React from "react";

import styles from "./SectionHeader.module.css";

const SectionHeader = ({ text, color }) => {
  return (
    <div className={styles.sectionHeader} style={{ color, borderBottom: `2px solid ${color}` }}>
      <p>{text}</p>
    </div>
  );
};

export default SectionHeader;
