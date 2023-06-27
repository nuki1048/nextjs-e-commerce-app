import React from "react";
import Link from "next/link";
import Image from "next/image";
import headphonesImage from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import styles from "./CategoryLinks.module.css";
const CategoryLinks = () => {
  return (
    <ul className={styles.links}>
      <li className={styles.link}>
        <Image
          src={headphonesImage}
          alt="Headphones preview image"
          width={"400"}
          height={"400"}
        />
        <p>HEADPHONES</p>
        <Link href={"/category/earphones"}>Shop</Link>
      </li>
      <li className={styles.link}>
        <Image
          src={speakersImage}
          alt="Speakers preview image"
          width={"400"}
          height={"400"}
        />
        <p>Speakers</p>
        <Link href={"/category/earphones"}>Shop</Link>
      </li>
      <li className={styles.link}>
        <Image
          src={earphonesImage}
          alt="Earphones preview image"
          width={"300"}
          height={"300"}
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
