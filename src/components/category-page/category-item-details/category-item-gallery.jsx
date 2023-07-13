import React from "react";
import styles from "./category-item-gallery.module.css";
import Image from "next/image";

import Container from "@/components/container/Container";
const CategoryItemGrid = ({ gallery }) => {
  return (
    <Container>
      <div className={styles.grid}>
        {Object.keys(gallery).map((photo) => (
          <Image
            key={gallery[photo].desktop}
            src={gallery[photo].desktop}
            alt="Gallery image"
            width={700}
            height={600}
          />
        ))}
      </div>
    </Container>
  );
};

export default CategoryItemGrid;
