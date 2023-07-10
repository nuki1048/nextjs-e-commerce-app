import React from "react";
import styles from "./category-item-gallery.module.css";
import Image from "next/image";

import Container from "@/components/container/Container";
const CategoryItemGrid = () => {
  return (
    <Container>
      <div className={styles.grid}>
        <Image
          src="/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
          alt="image"
          width={700}
          height={600}
        />
        <Image
          src="/assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
          alt="image"
          width={1000}
          height={1000}
        />
        <Image
          src="/assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
          alt="image"
          width={1000}
          height={1000}
        />
      </div>
    </Container>
  );
};

export default CategoryItemGrid;
