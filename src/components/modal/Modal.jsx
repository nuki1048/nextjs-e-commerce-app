import React from "react";
import styles from "./Modal.module.css";
const Modal = ({ children, isShow }) => {
  return <>{isShow && <div className={styles.modal}>{children}</div>}</>;
};

export default Modal;
