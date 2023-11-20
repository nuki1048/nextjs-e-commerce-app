import React from 'react';
import styles from './input.module.css';
const Input = ({ register, error, label, placeholder, dataTest, type }) => {
  return (
    <label
      className={error ? styles['error-label'] : styles.label}
      data-test={dataTest}
    >
      <div className={styles.info}>
        <span>{label}</span>
        {error && <span className={styles.error}>*</span>}
      </div>
      <input {...register} placeholder={placeholder} type={type} />
      {error && <span className={styles.error}>{error.message}</span>}
    </label>
  );
};

export default Input;
