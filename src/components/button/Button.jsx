import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";
const Button = ({ href, children, variant, style }) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${variant}`} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${styles.button} ${variant}`} style={style}>
      {children}
    </button>
  );
};

export default Button;
