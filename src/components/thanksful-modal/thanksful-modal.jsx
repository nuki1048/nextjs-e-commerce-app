import React from "react";
import Modal from "../modal/Modal";
import styles from "./thanksful-modal.module.css";

import Image from "next/image";
import Button from "../button/Button";

const ThanksfulModal = ({ isShow }) => {
  return (
    <Modal isShow={true}>
      <div className={styles.content}>
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="order confirmation icon"
          width={64}
          height={64}
        />
        <h2>THANK YOU FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className={styles.items}>
          <div className={styles["white-section"]}>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  src="/assets/cart/image-xx59-headphones.jpg"
                  alt="cart item photo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <span>XX99 MK II</span>
                <p className={styles.price}>$ 2,999</p>
              </div>
              <p className={styles.count}>x1</p>
            </div>
            <hr />
            <span className={styles.more}>and 2 other item(s)</span>
          </div>
          <div className={styles["black-section"]}>
            <h3>GRAND TOTAL</h3>
            <span>$ 5,446</span>
          </div>
        </div>

        <Button href={"/"} style={{ marginTop: "46px" }}>
          BACK TO HOME
        </Button>
      </div>
    </Modal>
  );
};

export default ThanksfulModal;
