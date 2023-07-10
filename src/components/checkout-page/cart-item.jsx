import React from "react";
import styles from "./cart-item.module.css";
import Image from "next/image";
import Link from "next/link";
const CartItem = ({ data }) => {
  return (
    <li className={styles.item}>
      <Image
        src="/assets/cart/image-xx59-headphones.jpg"
        alt="Photo cart"
        width={64}
        height={64}
      />
      <Link href="/">
        <div className={styles.info}>
          <span className={styles.name}>XX99 MK II</span>
          <span className={styles.price}>$ 2,999</span>
        </div>
      </Link>
      <span className={styles.count}>x1</span>
    </li>
  );
};

export default CartItem;
