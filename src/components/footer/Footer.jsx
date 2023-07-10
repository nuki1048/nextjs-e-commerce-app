import React from "react";
import styles from "./Footer.module.css";
import Container from "@/components/container/Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles["footer-content"]}>
          <nav className={styles.navbar}>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
            />
            <ul>
              <Link href="/">Home</Link>
              <Link href={"/category/headphones"}>Headphones</Link>
              <Link href={"/category/speakers"}>Speakers</Link>
              <Link href={"/category/earphones"}>Earphones</Link>
            </ul>
          </nav>
          <div className={styles.info}>
            <p className={styles.description}>
              Audiophile is an all in one stop to fulfill your audio needs.
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className={styles["social-media"]}>
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="instagram icon"
                className={styles["social-media-icon"]}
                width={24}
                height={24}
              />
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="instagram icon"
                className={styles["social-media-icon"]}
                width={24}
                height={24}
              />
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="instagram icon"
                className={styles["social-media-icon"]}
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className={styles.copyright}>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
