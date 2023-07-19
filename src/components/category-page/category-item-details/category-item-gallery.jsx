import React from "react";
import styles from "./category-item-gallery.module.css";
import Image from "next/image";

import Container from "@/components/container/Container";
import { useAnimations } from "@/lib/animations";
const CategoryItemGrid = ({ gallery }) => {
  const { AnimatedImage, fromTopView, fromBottomView, fromRightView } =
    useAnimations();
  const [fromTopRef, fromTopSpring] = fromTopView;
  const [fromBottomRef, fromBottomSpring] = fromBottomView;
  const [fromRightRef, fromRightSpring] = fromRightView;

  return (
    <Container>
      <div className={styles.grid}>
        {Object.keys(gallery).map((photo, index) => {
          switch (index) {
            case 0:
              return (
                <AnimatedImage
                  ref={fromTopRef}
                  style={fromTopSpring}
                  key={gallery[photo].desktop}
                  src={gallery[photo].desktop}
                  alt="Gallery image"
                  width={700}
                  height={600}
                />
              );
            case 1:
              return (
                <AnimatedImage
                  ref={fromBottomRef}
                  style={fromBottomSpring}
                  key={gallery[photo].desktop}
                  src={gallery[photo].desktop}
                  alt="Gallery image"
                  width={700}
                  height={600}
                />
              );
            case 2:
              return (
                <AnimatedImage
                  ref={fromRightRef}
                  style={fromRightSpring}
                  key={gallery[photo].desktop}
                  src={gallery[photo].desktop}
                  alt="Gallery image"
                  width={700}
                  height={600}
                />
              );
            default:
              return (
                <Image
                  key={gallery[photo].desktop}
                  src={gallery[photo].desktop}
                  alt="Gallery image"
                  width={700}
                  height={600}
                />
              );
          }
        })}
      </div>
    </Container>
  );
};

export default CategoryItemGrid;
