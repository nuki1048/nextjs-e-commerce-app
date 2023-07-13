import React from "react";
import styles from "./InputNumber.module.css";
const InputNumber = ({ counter, addValue, removeValue, width, height }) => {
  return (
    <div className={styles.counter} style={{ width, height }}>
      <button
        className={`${styles.button} ${styles["button-minus"]}`}
        onClick={removeValue}
      >
        -
      </button>
      <span className={styles.text}>{counter}</span>
      <button
        className={`${styles.button} ${styles["button-plus"]}`}
        onClick={addValue}
      >
        +
      </button>
    </div>
  );
};

export default InputNumber;
