import React from "react";
import styles from "./grid-item.module.css";
import Image from "next/image";
import Container from "@/components/container/Container";
const GridItems = () => {
  return (
    <Container>
      <section className={styles.grid}>
        <div className={styles["speaker-zx9"]}>
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="speaker preview photo"
            width={1000}
            height={700}
          />
          <div className={styles["speaker-info"]}>
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className={styles.button}>See Product</button>
          </div>
        </div>
        <div className={styles["speaker-zx7"]}>
          <h2>ZX7 SPEAKER</h2>
          <button className="button button-dark">See Product</button>
        </div>
        <div className={styles.earphones}>.</div>
        <div className={styles["earphones-info"]}>
          <h2>YX1 EARPHONES</h2>
          <button className="button button-dark">See Product</button>
        </div>
      </section>
    </Container>
  );
};

export default GridItems;
