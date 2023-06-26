import React, { useState } from "react";
import Modal from "@/components/modal/Modal";
import styles from "./ModalCart.module.css";
import ModalItem from "@/components/modalCart/ModalItem";
const ModalCart = ({ isShow, setShow }) => {
  const [counter, setCounter] = useState(0);
  return (
    <Modal classNames={styles} isShow={isShow}>
      <div className={styles.content}>
        <div className={styles["cart-info"]}>
          <h3 className={styles.counter}>cart (3)</h3>
          <button className={styles.button}>Remove all</button>
        </div>

        <ul className={styles.list}>
          <ModalItem />
          <ModalItem />
          <ModalItem />
        </ul>

        <div className={styles.price}>
          <p>total</p>
          <span>$ 5,396</span>
        </div>

        <button className="button">Checkout</button>
      </div>
    </Modal>
  );
};

export default ModalCart;
