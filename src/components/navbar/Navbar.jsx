import React from "react";
import Container from "@/components/container/Container";
import Link from "next/link";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Hamburger from "@/components/hamburger/Hamburger";
const Navbar = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <nav className={styles.navbar}>
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
            <Image src={cartIcon} alt="Cart Icon" width={"23"} height={"20"} />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
