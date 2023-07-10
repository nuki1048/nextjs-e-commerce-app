"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import CategoryItemDetails from "@/components/category-page/category-item-details/category-item-details";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/lib/redux/slices/productsSlice";
import { createSelector } from "@reduxjs/toolkit";

const ProductDetailsPage = () => {
  // const { query } = useRouter();
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (query && query.categoryName) {
  //     dispatch(fetchProducts({ categoryName: query.categoryName }));
  //   }
  //   // fetch("../api/products/category/" + query.categoryName)
  //   //   .then((products) => products.json())
  //   //   .then((products) => console.log(products));
  // }, [query]);
  return (
    <>
      <CategoryItemDetails />
    </>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
