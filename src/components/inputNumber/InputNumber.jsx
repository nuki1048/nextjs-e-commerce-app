import React from "react";
import styles from "./InputNumber.module.css";
const InputNumber = ({ counter, setCounter, width, height }) => {
  return (
    <div className={styles.counter} style={{ width, height }}>
      <button
        className={`${styles.button} ${styles["button-minus"]}`}
        onClick={() => setCounter((state) => state - 1)}
      >
        -
      </button>
      <span className={styles.text}>{counter}</span>
      <button
        className={`${styles.button} ${styles["button-plus"]}`}
        onClick={() => setCounter((state) => state + 1)}
      >
        +
      </button>
    </div>
  );
};

export default InputNumber;
