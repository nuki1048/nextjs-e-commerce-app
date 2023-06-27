import React from "react";
import styles from "./category-item.module.css";
import Image from "next/image";
import previewPhoto from "../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import Button from "@/components/button/Button";
const CategoryItem = ({ data, index }) => {
  let flexRow = styles.row;
  if (index % 2 === 0) {
    flexRow = styles["reversed-row"];
  }

  return (
    // TODO: Change to online data
    <div className={`${styles.item} ${flexRow}`}>
      <div className={styles.image}>
        <Image src={previewPhoto} alt="Image" />
      </div>
      <div className={styles.content}>
        <span>New product</span>
        <h3>XX99 Mark II Headphones</h3>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Button href="/category/headphones/55">see product</Button>
      </div>
    </div>
  );
};

export default CategoryItem;
