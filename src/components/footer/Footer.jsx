import React from "react";
import styles from "./Footer.module.css";
import Container from "@/components/container/Container";
import Image from "next/image";
import { animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";

const Footer = () => {
  const {
    fromTopView,
    fromBottomView,
    opacityView,
    AnimatedLink,
    AnimatedImage,
  } = useAnimations();
  const [refLinks, springsLinks] = fromTopView;

  const [refDesc, springsDesc] = fromBottomView;

  const [refOpacity, springsOpacity] = opacityView;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles["footer-content"]}>
          <nav className={styles.navbar}>
            <AnimatedImage
              ref={refOpacity}
              style={springsOpacity}
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
            />
            <ul>
              <AnimatedLink ref={refLinks} style={springsLinks} href="/">
                Home
              </AnimatedLink>
              <AnimatedLink
                ref={refLinks}
                style={springsLinks}
                href={"/category/headphones"}
              >
                Headphones
              </AnimatedLink>
              <AnimatedLink
                ref={refLinks}
                style={springsLinks}
                href={"/category/speakers"}
              >
                Speakers
              </AnimatedLink>
              <AnimatedLink
                ref={refLinks}
                style={springsLinks}
                href={"/category/earphones"}
              >
                Earphones
              </AnimatedLink>
            </ul>
          </nav>
          <animated.div
            className={styles.info}
            ref={refDesc}
            style={springsDesc}
          >
            <animated.p
              className={styles.description}
              ref={refDesc}
              style={springsDesc}
            >
              Audiophile is an all in one stop to fulfill your audio needs.
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </animated.p>
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
          </animated.div>
          <animated.p
            className={styles.copyright}
            ref={refDesc}
            style={springsDesc}
          >
            Copyright 2021. All Rights Reserved
          </animated.p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
