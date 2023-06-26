import React from "react";
import styles from "./InputNumber.module.css";
const InputNumber = ({ counter, setCounter }) => {
  return (
    <div className={styles.counter}>
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
