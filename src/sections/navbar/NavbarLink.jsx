import React from "react";

import styles from "./Navbar.module.css";

const NavbarLink = ({ linkName, color, underline = true, defaultLink = false, id, onClick }) => {
  const linkStyle = underline ? styles.navbar__navLinkSelected : "";
  return (
    <li
      onClick={onClick}
      className={`${linkName.toLowerCase()} ${defaultLink && "navbar__navLinks_link_active"} ${
        styles.navbar__navLinks_link
      } navbar__navLinks_link`}
      style={{ color }}
    >
      <a href={`#${id ? id : linkName.toLowerCase()}`}>{linkName}</a>
    </li>
  );
};

export default NavbarLink;
