import React from "react";
import { useRouter } from "next/router";
import CategoryItemDetails from "@/components/category-page/category-item-details/category-item-details";

const ProductDetailsPage = () => {
  const router = useRouter();
  return (
    <>
      <CategoryItemDetails />
    </>
  );
};

export default ProductDetailsPage;
