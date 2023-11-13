import React from "react";

import styles from "./Navbar.module.css";

const NavbarLink = ({ linkName, selectedLink, setSelectedLink, color, underline = true }) => {
  const linkStyle = underline ? styles.navbar__navLinkSelected : "";
  return (
    <li onClick={() => setSelectedLink(linkName)}>
      <div className={selectedLink === linkName ? linkStyle : {}} style={{ color }}>
        <p>{linkName}</p>
      </div>
    </li>
  );
};

export default NavbarLink;
