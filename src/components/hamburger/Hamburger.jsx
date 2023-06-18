import React, { useState } from "react";
import styles from "./Hamburger.module.css";
import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
const Hamburger = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((state) => !state);
  };

  return (
    <>
      <div className={styles.hamburger} onClick={handleClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <View showModal={showModal} />
    </>
  );
};

const View = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className={styles.menu}>
          <CategoryLinks />
        </div>
      )}
    </>
  );
};

export default Hamburger;
