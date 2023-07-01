import React from "react";
import styles from "./category-item-gallery.module.css";
import Image from "next/image";

import photo2 from "../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import photo1 from "../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import photo3 from "../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import Container from "@/components/container/Container";
const CategoryItemGrid = () => {
  return (
    <Container>
      <div className={styles.grid}>
        <Image src={photo1} alt="image" width={700} height={600} />
        <Image src={photo2} alt="image" width={1000} height={1000} />
        <Image src={photo3} alt="image" width={1000} height={1000} />
      </div>
    </Container>
  );
};

export default CategoryItemGrid;
