import React from 'react';
import styles from './InputNumber.module.css';
const InputNumber = ({ counter, addValue, removeValue, width, height }) => {
  return (
    <div className={styles.counter} style={{ width, height }}>
      <button
        className={`${styles.button} ${styles['button-minus']}`}
        onClick={removeValue}
        data-test='input-number-decrease'
      >
        -
      </button>
      <span className={styles.text} data-test='input-number-value'>
        {counter}
      </span>
      <button
        className={`${styles.button} ${styles['button-plus']}`}
        onClick={addValue}
        data-test='input-number-increase'
      >
        +
      </button>
    </div>
  );
};

export default InputNumber;
