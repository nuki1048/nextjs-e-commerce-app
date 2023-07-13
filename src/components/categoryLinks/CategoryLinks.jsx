import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryLinks.module.css";
const CategoryLinks = ({ style }) => {
  return (
    <ul className={styles.links} style={style}>
      <li className={styles.link}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="Headphones preview image"
          width={400}
          height={400}
        />
        <p>HEADPHONES</p>
        <Link href={"/category/headphones"}>Shop</Link>
      </li>
      <li className={styles.link}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="Speakers preview image"
          width={400}
          height={400}
        />
        <p>Speakers</p>
        <Link href={"/category/speakers"}>Shop</Link>
      </li>
      <li className={styles.link}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="Earphones preview image"
          width={300}
          height={300}
        />
        <p>Earphones</p>
        <Link href={"/category/earphones"} className={styles.button}>
          Shop
        </Link>
      </li>
    </ul>
  );
};

export default CategoryLinks;
