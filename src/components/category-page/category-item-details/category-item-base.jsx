import { useState } from "react";

import Container from "@/components/container/Container";
import Link from "next/link";
import Image from "next/image";
import InputNumber from "@/components/inputNumber/InputNumber";
import Button from "@/components/button/Button";

import styles from "./category-item-base.module.css";

const CategoryItemBase = () => {
  const [counter, setCounter] = useState(0);
  const titleText = "ZX9 SPEAKER";
  const arr = titleText.split(" ");

  return (
    <div className={styles.item}>
      <Container>
        <Link href="/category/headphones" className={styles.link}>
          Go back
        </Link>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
              alt="image"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.info}>
            <span>New product</span>
            <h2>
              {arr[0]} <br /> {arr[1]}
            </h2>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <span className={styles.price}>$ 4,500</span>
            <div className={styles.actions}>
              <InputNumber
                width={"120px"}
                height={"48px"}
                counter={counter}
                setCounter={setCounter}
              />
              <Button
                style={{ width: "160px", height: "48px", marginLeft: "16px" }}
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
