import React, { useEffect, useRef, useState } from "react";
import styles from "./radio.module.css";
import { set } from "react-hook-form";
const Radio = ({ register, error, label, placeholder, value, borderShow }) => {
  // const [borderShow, setBorderShow] = useState(false);
  const labelRef = useRef();

  // const handleClick = (e) => {
  //   if (
  //     labelRef.current.childNodes[0] &&
  //     labelRef.current.childNodes[0].checked === true
  //   ) {
  //     console.log(typeof labelRef.current.childNodes[0].checked);
  //     setBorderShow(true);
  //     return;
  //   }
  // };

  return (
    <label
      className={styles.label}
      style={{ border: borderShow ? "1px solid #d87d4a" : "" }}
      ref={labelRef}
    >
      <input {...register} type="radio" value={value} />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
