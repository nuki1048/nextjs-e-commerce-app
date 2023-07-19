import React from "react";
import styles from "./category-item-info.module.css";
import Container from "@/components/container/Container";
import { animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";
const CategoryItemInfo = ({ features, includes }) => {
  const splitFeatures = features.split("\n").filter((item) => item !== "");
  const { fromLeftView, fromRightView } = useAnimations();
  const [fromLeftRef, fromLeftSpring] = fromLeftView;
  const [fromRightRef, fromRightSpring] = fromRightView;

  return (
    <Container>
      <div className={styles.info}>
        <animated.div
          ref={fromLeftRef}
          style={fromLeftSpring}
          className={styles.features}
        >
          <h3>FEATURES</h3>
          <p>
            {splitFeatures[0]}
            <br />
            <br />
            {splitFeatures[1]}
          </p>
        </animated.div>
        <animated.div
          ref={fromRightRef}
          style={fromRightSpring}
          className={styles.box}
        >
          <h3>in the box</h3>
          <ul>
            {includes.map((includesItem) => (
              <li key={includesItem.item}>
                <span>{includesItem.quantity}x</span>
                <p>{includesItem.item}</p>
              </li>
            ))}
          </ul>
        </animated.div>
      </div>
    </Container>
  );
};

export default CategoryItemInfo;
