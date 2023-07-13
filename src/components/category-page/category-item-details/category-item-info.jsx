import React from "react";
import styles from "./category-item-info.module.css";
import Container from "@/components/container/Container";
const CategoryItemInfo = ({ features, includes }) => {
  const splitFeatures = features.split("\n").filter((item) => item !== "");
  return (
    <Container>
      <div className={styles.info}>
        <div className={styles.features}>
          <h3>FEATURES</h3>
          <p>
            {splitFeatures[0]}
            <br />
            <br />
            {splitFeatures[1]}
          </p>
        </div>
        <div className={styles.box}>
          <h3>in the box</h3>
          <ul>
            {includes.map((includesItem) => (
              <li key={includesItem.item}>
                <span>{includesItem.quantity}x</span>
                <p>{includesItem.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CategoryItemInfo;
