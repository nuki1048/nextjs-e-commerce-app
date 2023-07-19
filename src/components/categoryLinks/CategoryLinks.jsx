import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryLinks.module.css";
import { animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";

const CategoryLinks = ({ style }) => {
  const { opacityView } = useAnimations();
  const [refLink, springs] = opacityView;

  return (
    <ul className={styles.links} style={style}>
      <animated.li className={styles.link} ref={refLink} style={springs}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="Headphones preview image"
          width={400}
          height={400}
        />
        <p>HEADPHONES</p>
        <Link href={"/category/headphones"}>Shop</Link>
      </animated.li>
      <animated.li className={styles.link} ref={refLink} style={springs}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="Speakers preview image"
          width={400}
          height={400}
        />
        <p>Speakers</p>
        <Link href={"/category/speakers"}>Shop</Link>
      </animated.li>
      <animated.li className={styles.link} ref={refLink} style={springs}>
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
      </animated.li>
    </ul>
  );
};

export default CategoryLinks;
