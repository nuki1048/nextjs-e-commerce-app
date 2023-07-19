import React, { useState } from "react";
import styles from "./Hamburger.module.css";
import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import { useTransition, animated } from "@react-spring/web";
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
  const transition = useTransition(showModal, {
    from: {
      opacity: 0,
      top: 0,
    },
    enter: {
      opacity: 1,
      top: 90,
    },
    leave: {
      opacity: 0,
      top: 0,
    },
  });
  return (
    <>
      {transition((style, showModal) => (
        <>
          {showModal && (
            <animated.div style={style} className={styles.menu}>
              <CategoryLinks />
            </animated.div>
          )}
        </>
      ))}
    </>
  );
};

export default Hamburger;
