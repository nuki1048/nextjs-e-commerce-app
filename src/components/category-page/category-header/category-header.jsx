import React from "react";
import styles from "./category-header.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";
const CategoryHeader = ({ title }) => {
  const { fromTopSpring } = useAnimations();

  return (
    <header className={styles.container}>
      <animated.h1 style={fromTopSpring}>{title}</animated.h1>
    </header>
  );
};

export default CategoryHeader;
