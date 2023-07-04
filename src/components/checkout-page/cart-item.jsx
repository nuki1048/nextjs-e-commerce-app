import React from "react";
import styles from "./cart-item.module.css";
import Image from "next/image";
import photo from "../../assets/cart/image-xx59-headphones.jpg";
const CartItem = ({ data }) => {
  return (
    <li className={styles.item}>
      <Image src={photo} alt="Photo cart" width={64} height={64} />
      <div className={styles.info}>
        <span className={styles.name}>XX99 MK II</span>
        <span className={styles.price}>$ 2,999</span>
      </div>
      <span className={styles.count}>x1</span>
    </li>
  );
};

export default CartItem;
