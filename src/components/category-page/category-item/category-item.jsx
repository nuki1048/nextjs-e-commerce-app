import React from "react";
import styles from "./category-item.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useInView, animated, useSpring } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";
const CategoryItem = ({ data, count }) => {
  let flexRow = styles.row;
  const { fromLeftView, fromRightView, fromLeftSpring } = useAnimations();
  const [defaultRef, defaultSprings] = fromLeftView;
  const [reversedRef, reversedSprings] = fromRightView;
  const { name } = data;
  const [firstWord, ...restWords] = name.split(" ");
  let ref = defaultRef;
  let springs = defaultSprings;

  if (count === 1) {
    ref = null;
    springs = fromLeftSpring;
  }

  if (count % 2 === 0) {
    flexRow = styles["reversed-row"];
    ref = reversedRef;
    springs = reversedSprings;
  }

  return (
    <animated.div
      ref={ref}
      style={springs}
      className={`${styles.item} ${flexRow}`}
    >
      <div className={styles.image}>
        <Image
          src={data.categoryImage.desktop}
          alt="Image"
          width={1200}
          height={1000}
        />
      </div>
      <div className={styles.content}>
        {data.new && <span>New product</span>}
        <h3>
          {firstWord} <br /> {...restWords.join(" ")}
        </h3>
        <p>{data.description}</p>
        <Button href={`/category/${data.category}/${data.slug}`}>
          see product
        </Button>
      </div>
    </animated.div>
  );
};

export default CategoryItem;
