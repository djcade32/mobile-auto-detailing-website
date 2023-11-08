import React from "react";

import styles from "./Navbar.module.css";

const NavbarLink = ({ linkName, selectedLink, setSelectedLink, color }) => {
  return (
    <li onClick={() => setSelectedLink(linkName)}>
      <div
        className={selectedLink === linkName ? styles.navbar__navLinkSelected : {}}
        style={{ color }}
      >
        <p>{linkName}</p>
      </div>
    </li>
  );
};

export default NavbarLink;
