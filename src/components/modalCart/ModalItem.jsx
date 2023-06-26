import React, { useState } from "react";
import styles from "./ModalItem.module.css";
import InputNumber from "@/components/inputNumber/InputNumber";
import Image from "next/image";

import photo from "../../assets/cart/image-xx59-headphones.jpg";
const ModalItem = ({ item }) => {
  const [counter, setCounter] = useState(0);
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image src={photo} alt="cart item img" />
      </div>
      <div className={styles.info}>
        <p>XX59</p>
        <span>$ 899</span>
      </div>
      <InputNumber counter={counter} setCounter={setCounter} />
    </li>
  );
};

export default ModalItem;
