import React from "react";
import styles from "./Modal.module.css";
const Modal = ({ children, style, isShow }) => {
  return (
    <>
      {isShow && (
        <div className={styles.modal} style={style}>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
