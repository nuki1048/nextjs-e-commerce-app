import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";
const Button = ({
  href,
  children,
  variant,
  style,
  onClick: onClickEvent,
  disabled,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${styles[variant]}`}
        style={style}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      style={style}
      onClick={onClickEvent}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
