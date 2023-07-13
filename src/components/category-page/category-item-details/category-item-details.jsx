import React from "react";
import Container from "@/components/container/Container";
import CategoryItemInfo from "./category-item-info";
import CategoryItemGallery from "./category-item-gallery";

import styles from "./category-item-details.module.css";
import CategoryItemOffers from "./category-item-offers";
import CategoryItemBase from "./category-item-base";
import Info from "@/components/home-page/info/info";
import CategoryLinks from "@/components/categoryLinks/CategoryLinks";

const CategoryItemDetails = ({ data, onAddToCart, onRemoveFromCart }) => {
  const titleText = "ZX9 SPEAKER";
  const arr = titleText.split(" ");
  const {
    name,
    description,
    category,
    price,
    features,
    includes,
    others,
    gallery,
    image,
    _id,
  } = data;

  return (
    <div className={styles.item}>
      <CategoryItemBase
        name={name}
        category={category}
        image={image}
        newProduct={data.new}
        description={description}
        price={price}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        id={_id}
      />
      <CategoryItemInfo features={features} includes={includes} />
      <CategoryItemGallery gallery={gallery} />
      <CategoryItemOffers offers={others} />
      <Container>
        <CategoryLinks style={{ marginTop: "244px" }} />
      </Container>
      <Info style={{ marginTop: "155px" }} />
    </div>
  );
};

export default CategoryItemDetails;
