import React from "react";
import CategoryItem from "../category-item/category-item";
import Container from "../../container/Container";
import styles from "./category-grid.module.css";
const CategoryGrid = ({ data }) => {
  return (
    <Container>
      {/* TODO: Change to map of data */}
      <div className={styles["grid-container"]}>
        {data?.map((item, index) => (
          <CategoryItem count={index + 1} key={item._id} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default CategoryGrid;
