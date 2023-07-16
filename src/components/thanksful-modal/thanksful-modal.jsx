import React from "react";
import Modal from "../modal/Modal";

import Image from "next/image";
import Button from "../button/Button";

import styles from "./thanksful-modal.module.css";
import { useSelector } from "react-redux";

const ThanksfulModal = ({ isShow, total }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const slicedName = `${cartItems[0]?.name?.slice(0, 7)}...`;

  return (
    <Modal isShow={isShow}>
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
                  src={cartItems[0]?.image}
                  alt="Cart Item Photo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <span>{cartItems && slicedName}</span>
                <p className={styles.price}>$ {cartItems[0]?.price}</p>
              </div>
              <p className={styles.count}>x{cartItems[0]?.count}</p>
            </div>
            <hr />
            <span className={styles.more}>
              and {cartItems?.length - 1} other item(s)
            </span>
          </div>
          <div className={styles["black-section"]}>
            <h3>GRAND TOTAL</h3>
            <span>$ {total}</span>
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
