import React from "react";
import Container from "@/components/container/Container";
import Link from "next/link";
import Image from "next/image";
import InputNumber from "@/components/inputNumber/InputNumber";
import Button from "@/components/button/Button";
import { useState } from "react";
import CategoryItemInfo from "./category-item-info";
import CategoryItemGallery from "./category-item-gallery";

import photo3 from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

import styles from "./category-item-details.module.css";
import CategoryItemOffers from "./category-item-offers";
import CategoryItemBase from "./category-item-base";
import Info from "@/components/home-page/info/info";
import CategoryLinks from "@/components/categoryLinks/CategoryLinks";

const CategoryItemDetails = () => {
  const [counter, setCounter] = useState(0);
  const titleText = "ZX9 SPEAKER";
  const arr = titleText.split(" ");

  return (
    <div className={styles.item}>
      <CategoryItemBase />
      <CategoryItemInfo />
      <CategoryItemGallery />
      <CategoryItemOffers />
      <Container>
        <CategoryLinks style={{ marginTop: "244px" }} />
      </Container>
      <Info style={{ marginTop: "155px" }} />
    </div>
  );
};

export default CategoryItemDetails;
