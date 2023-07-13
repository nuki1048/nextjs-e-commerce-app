"use client";
import React, { useEffect } from "react";
import CategoryItemDetails from "@/components/category-page/category-item-details/category-item-details";
import { useDispatch, useSelector } from "react-redux";
import { connectToDatabase, getDocuments } from "@/lib/db";
import {
  addItemToCart,
  deleteItemFromCart,
} from "@/lib/redux/slices/cartSlice";

import { setCookie } from "cookies-next";

import Cookies from "js-cookie";

const ProductDetailsPage = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function onAddToCart() {
    const cartItem = {
      id: product._id,
      name: product.name,
      image: product.image.mobile,
      category: product.category,
      slug: product.slug,
      price: product.price,
    };

    dispatch(addItemToCart(cartItem));
  }

  function onRemoveFromCart() {
    try {
      dispatch(deleteItemFromCart({ id: product._id }));
    } catch (error) {}
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setCookie("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <>
      <CategoryItemDetails
        data={product}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    </>
  );
};

export default ProductDetailsPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { productSlug } = params;
  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  const product = await getDocuments(client, { slug: productSlug }, "products");

  if (!product || product.length === 0) {
    return {
      notFound: true,
    };
  }

  await client.close();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product[0])),
    },
  };
}

export async function getStaticPaths() {
  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const products = await getDocuments(client, {}, "products");

  const paths = products
    .filter((item) => item.new)
    .map((product) => {
      return {
        params: { productSlug: product.slug, categoryName: product.category },
      };
    });

  return {
    paths: paths,
    fallback: "blocking",
  };
}
