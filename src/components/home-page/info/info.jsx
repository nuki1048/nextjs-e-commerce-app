import React from "react";
import styles from "./info.module.css";
import Container from "@/components/container/Container";
import previewPhoto from "../../../assets/shared/desktop/image-best-gear.jpg";
import Image from "next/image";
const Info = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <h2>
              Bringing you the <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <Image src={previewPhoto} alt="image hero" width={500} height={500} />
        </div>
      </Container>
    </section>
  );
};

export default Info;
