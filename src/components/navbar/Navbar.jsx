import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Hamburger from "@/components/hamburger/Hamburger";
import ModalCart from "@/components/modalCart/ModalCart";
import Container from "@/components/container/Container";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => {
    setModalShow((state) => !state);
  };

  let navbarBackground = "#000";

  if (router.route === "/") {
    navbarBackground = "transparent";
  }

  return (
    <>
      <nav
        className={styles.navbar}
        style={{ backgroundColor: navbarBackground }}
      >
        <Container>
          <div className={styles["navbar-content"]}>
            <Hamburger />
            <Link href={"/"}>
              <Image
                src="/assets/shared/desktop/logo.svg"
                alt="Logo"
                width={143}
                height={25}
                className={styles.logo}
              />
            </Link>
            <ul className={styles.links}>
              <Link href="/">Home</Link>
              <Link href={"/category/headphones"}>HEADPHONES</Link>
              <Link href={"/category/speakers"}>SPEAKERS</Link>
              <Link href={"/category/earphones"}>EARPHONES</Link>
            </ul>
            <div onClick={handleClick} className={styles.cart}>
              <Image
                src="/assets/shared/desktop/icon-cart.svg"
                alt="Cart Icon"
                width={23}
                height={20}
              />
            </div>
          </div>
        </Container>
        <hr />
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
