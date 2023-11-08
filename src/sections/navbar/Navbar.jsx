import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

import salfordLogo from "../../assets/salford-logo.png";
import NavbarLink from "./NavbarLink";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.navbar__logo} src={salfordLogo} alt="company logo" />
      </div>
      <div className={styles.navbar__desktop}>
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
      <div ref={ref} className={styles.navbar__mobile}>
        {!mobileMenuOpen ? (
          <RxHamburgerMenu
            size={25}
            color="white"
            cursor="pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <div className={styles.navbar__mobile_navLinksContainer}>
            <ul className={styles.navbar__navLinks}>
              <NavbarLink
                linkName={"Home"}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
                color="var(--primary)"
              />
              <NavbarLink
                linkName={"Services"}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
                color="var(--primary)"
              />
              <NavbarLink
                linkName={"Packages"}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
                color="var(--primary)"
              />
              <NavbarLink
                linkName={"Testimonials"}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
                color="var(--primary)"
              />
              <NavbarLink
                linkName={"Contact Us"}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
                color="var(--primary)"
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
