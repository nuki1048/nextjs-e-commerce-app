import { useState } from "react";

import Container from "@/components/container/Container";
import Link from "next/link";
import Image from "next/image";
import InputNumber from "@/components/inputNumber/InputNumber";
import Button from "@/components/button/Button";

import styles from "./category-item-base.module.css";
import { useSelector } from "react-redux";
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

  return (
    <div className={styles.item}>
      <Container>
        <Link href={`/category/${category}`} className={styles.link}>
          Go back
        </Link>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={image.desktop} alt="image" width={300} height={300} />
          </div>
          <div className={styles.info}>
            {newProduct && <span>New product</span>}
            <h2>
              {arr[0]} <br /> {arr[1]}
            </h2>
            <p>{description}</p>
            <span className={styles.price}>$ {price}</span>
            <div className={styles.actions}>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryItemBase;
