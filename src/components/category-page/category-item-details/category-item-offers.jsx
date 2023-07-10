import React from "react";
import styles from "./category-item-offers.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

import Container from "@/components/container/Container";

const CategoryItemOffers = () => {
  const buttonStyle = { marginTop: "32px", width: "160px", height: "48px" };

  return (
    <Container>
      <div className={styles.offers}>
        <h2>you may also like</h2>
        <ul>
          <li>
            <Image
              src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
              alt="image"
              width={300}
              height={300}
            />
            <h3>ZX7 SPEAKER</h3>
            <Button style={buttonStyle}>See Product</Button>
          </li>
          <li>
            <Image
              src="/assets/shared/desktop/image-zx9-speaker.jpg"
              alt="image"
              width={300}
              height={300}
            />
            <h3>XX99 MARK I</h3>
            <Button style={buttonStyle}>See Product</Button>
          </li>
          <li>
            <Image
              src="/assets/shared/desktop/image-xx59-headphones.jpg"
              alt="image"
              width={300}
              height={300}
            />
            <h3>XX59</h3>
            <Button style={buttonStyle}>See Product</Button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default CategoryItemOffers;
