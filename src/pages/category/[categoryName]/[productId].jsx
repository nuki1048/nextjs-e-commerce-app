import React from "react";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Product Details Page</h1>
    </div>
  );
};

export default ProductDetailsPage;
