import React from "react";
import styles from "./category-item.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
const CategoryItem = ({ data, count }) => {
  let flexRow = styles.row;
  if (count % 2 === 0) {
    flexRow = styles["reversed-row"];
  }
  // TODO: 1. IMG, 2. new product: true/false, 3. name, 4. description, 5. slug

  return (
    // TODO: Change to online data
    <div className={`${styles.item} ${flexRow}`}>
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
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <Button href={`/category/${data.category}/${data.slug}`}>
          see product
        </Button>
      </div>
    </div>
  );
};

export default CategoryItem;
