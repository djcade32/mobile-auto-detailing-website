import React, { useState } from "react";
import styles from "./Navbar.module.css";

import salfordLogo from "../../assets/salford-logo.png";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.navbar__logo} src={salfordLogo} alt="company logo" />
      </div>
      <div>
        <ul className={styles.navbar__navLinks}>
          <NavbarLink
            linkName={"Home"}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavbarLink
            linkName={"Services"}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavbarLink
            linkName={"Packages"}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavbarLink
            linkName={"Testimonials"}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavbarLink
            linkName={"Contact Us"}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
