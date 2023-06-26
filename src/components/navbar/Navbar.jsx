import React, { useState } from "react";
import PropTypes from "prop-types";

import Container from "@/components/container/Container";
import Link from "next/link";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Hamburger from "@/components/hamburger/Hamburger";
import ModalCart from "@/components/modalCart/ModalCart";
const Navbar = ({ backgroundColor }) => {
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setModalShow((state) => !state);
  };

  return (
    <>
      <nav
        className={styles.navbar}
        style={{ backgroundColor: backgroundColor }}
      >
        <Container>
          <div className={styles["navbar-content"]}>
            <Hamburger />
            <Image
              src={Logo}
              alt="Logo"
              width={"143"}
              height={"25"}
              className={styles.logo}
            />
            <ul className={styles.links}>
              <Link href="/">Home</Link>
              <Link href={"/category/headphones"}>HEADPHONES</Link>
              <Link href={"/category/speakers"}>SPEAKERS</Link>
              <Link href={"/category/earphones"}>EARPHONES</Link>
            </ul>
            <div onClick={handleClick} className={styles.cart}>
              <Image
                src={cartIcon}
                alt="Cart Icon"
                width={"23"}
                height={"20"}
              />
            </div>
          </div>
        </Container>
        {backgroundColor === "transparent" && <hr />}
      </nav>
      <ModalCart isShow={modalShow} />
    </>
  );
};
Navbar.propTypes = {
  backgroundColor: PropTypes.string,
};
Navbar.defaultProps = {
  backgroundColor: "#000",
};

export default Navbar;
