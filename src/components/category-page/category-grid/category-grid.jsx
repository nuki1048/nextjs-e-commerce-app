import React from "react";
import CategoryItem from "../category-item/category-item";
import Container from "../../container/Container";
import styles from "./category-grid.module.css";
const CategoryGrid = ({ data }) => {
  return (
    <Container>
      {/* TODO: Change to map of data */}
      <div className={styles["grid-container"]}>
        <CategoryItem index={1} />
        <CategoryItem index={2} />
        <CategoryItem index={3} />
      </div>
    </Container>
  );
};

export default CategoryGrid;
