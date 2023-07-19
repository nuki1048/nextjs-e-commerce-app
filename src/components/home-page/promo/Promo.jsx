import React from "react";
import styles from "./Promo.module.css";
import Image from "next/image";
import Container from "@/components/container/Container";
import { animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";
const Promo = () => {
  const { fromLeftSpring, fromRightSpring, fromBottomSpring, AnimatedLink } =
    useAnimations();
  const springsH1 = fromLeftSpring;

  const springsH3 = fromRightSpring;
  const springsP = fromRightSpring;
  const springsLink = fromBottomSpring;

  return (
    <section className={styles.promo}>
      <Image
        src="/assets/home/desktop/image-hero.jpg"
        alt="Background image"
        width={3000}
        height={3000}
        className={styles["desktop-image"]}
      />
      <Image
        src="/assets/home/tablet/image-header.jpg"
        alt="Background image"
        className={styles["tablet-image"]}
        width={3000}
        height={3000}
      />
      <Image
        src="/assets/home/mobile/image-header.jpg"
        alt="Background image"
        className={styles["mobile-image"]}
        width={3000}
        height={3000}
      />
      <div className={styles["promo-content"]}>
        <Container>
          <animated.h3 style={springsH3} className={styles.product}>
            New product
          </animated.h3>
          <animated.h1 style={springsH1} className={styles.title}>
            XX99 Mark II Headphones
          </animated.h1>
          <animated.p style={springsP} className={styles.info}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </animated.p>
          <AnimatedLink
            style={springsLink}
            href={"/category/headphones/xx99-mark-two-headphones"}
            className={styles.button}
          >
            See Product
          </AnimatedLink>
        </Container>
      </div>
    </section>
  );
};

export default Promo;
