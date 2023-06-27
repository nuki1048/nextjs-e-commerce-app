import React from "react";
import styles from "./category-header.module.css";
const CategoryHeader = ({ title }) => {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
    </header>
  );
};

export default CategoryHeader;
