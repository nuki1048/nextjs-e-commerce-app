import { useState } from "react";

import Container from "@/components/container/Container";
import Link from "next/link";
import Image from "next/image";
import InputNumber from "@/components/inputNumber/InputNumber";
import Button from "@/components/button/Button";

import styles from "./category-item-base.module.css";
import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";
const CategoryItemBase = ({
  name,
  category,
  image,
  newProduct,
  description,
  price,
  onAddToCart,
  onRemoveFromCart,
  id,
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const product = cartItems.find((item) => item.id === id);
  const titleText = name;
  const arr = titleText.split(" ");
  const {
    fromTopSpring,
    fromLeftSpring,
    fromRightSpring,
    fromBottomSpring,
    AnimatedLink,
  } = useAnimations();

  const fromTopSpringLink = useSpring({
    from: {
      opacity: 0,
      y: -100,
    },
    to: {
      opacity: 0.5,
      y: 0,
    },
  });

  return (
    <div className={styles.item}>
      <Container>
        <AnimatedLink
          style={fromTopSpringLink}
          href={`/category/${category}`}
          className={styles.link}
        >
          Go back
        </AnimatedLink>
        <div className={styles.content}>
          <animated.div style={fromLeftSpring} className={styles.image}>
            <Image src={image.desktop} alt="image" width={300} height={300} />
          </animated.div>
          <div className={styles.info}>
            {newProduct && (
              <animated.span style={fromTopSpring}>New product</animated.span>
            )}
            <animated.h2 style={fromRightSpring}>
              {arr[0]} <br /> {arr[1]}
            </animated.h2>
            <animated.p style={fromRightSpring}>{description}</animated.p>
            <animated.span style={fromRightSpring} className={styles.price}>
              $ {price}
            </animated.span>
            <animated.div style={fromBottomSpring} className={styles.actions}>
              <InputNumber
                width={"120px"}
                height={"48px"}
                counter={product?.count || 0}
                addValue={onAddToCart}
                removeValue={onRemoveFromCart}
              />
              <Button
                style={{ width: "160px", height: "48px", marginLeft: "16px" }}
                onClick={onAddToCart}
              >
                ADD TO CART
              </Button>
            </animated.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryItemBase;
