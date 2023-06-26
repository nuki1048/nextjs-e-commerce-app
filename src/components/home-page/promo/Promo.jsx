import React from "react";
import styles from "./Promo.module.css";
import Image from "next/image";
import desktopBG from "../../../assets/home/desktop/image-hero.jpg";
import tabletBG from "../../../assets/home/tablet/image-header.jpg";
import mobileBG from "../../../assets/home/mobile/image-header.jpg";
import Link from "next/link";
import Container from "@/components/container/Container";
const Promo = () => {
  return (
    <div className={styles.promo}>
      <Image
        src={desktopBG}
        alt="Background image"
        width="3000"
        height="3000"
        className={styles["desktop-image"]}
      />
      <Image
        src={tabletBG}
        alt="Background image"
        className={styles["tablet-image"]}
        width="3000"
        height="3000"
      />
      <Image
        src={mobileBG}
        alt="Background image"
        className={styles["mobile-image"]}
        width="3000"
        height="3000"
      />
      <div className={styles["promo-content"]}>
        <Container>
          <h3 className={styles.product}>New product</h3>
          <h1 className={styles.title}>XX99 Mark II Headphones</h1>
          <p className={styles.info}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href={"/category/headphones/"} className={styles.button}>
            See Product
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Promo;
