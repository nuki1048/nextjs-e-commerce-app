import React, { useEffect } from "react";
import Modal from "@/components/modal/Modal";
import styles from "./ModalCart.module.css";
import ModalCartItem from "@/components/modalCart/ModalItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, updateCartTotal } from "@/lib/redux/slices/cartSlice";
import Button from "../button/Button";
import { setCookie } from "cookies-next";
const ModalCart = ({ isShow }) => {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    dispatch(updateCartTotal(total));
  }, [cartItems, dispatch]);

  const onClearCart = () => {
    dispatch(clearCart());
    setCookie("cart", []);
  };

  return (
    <Modal isShow={isShow}>
      <div className={styles.content}>
        <div className={styles["cart-info"]}>
          <h3 className={styles.counter}>cart ({cartItems.length})</h3>
          <button className={styles.button} onClick={onClearCart}>
            Remove all
          </button>
        </div>

        <ul className={styles.list}>
          {cartItems.map((item) => (
            <ModalCartItem key={item.id} data={item} />
          ))}
        </ul>

        <div className={styles.price}>
          <p>total</p>
          <span>$ {cartTotal}</span>
        </div>

        <Button href={"/checkout"}>Checkout</Button>
      </div>
    </Modal>
  );
};

export default ModalCart;
