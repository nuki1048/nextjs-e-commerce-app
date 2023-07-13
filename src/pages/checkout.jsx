import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import { wrapper } from "@/lib/redux/store";
import { updateCart } from "@/lib/redux/slices/cartSlice";

const CheckoutPage = () => {
  return (
    <div>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      const cookies = req.cookies.cart;

      if (!cookies) {
        return {
          notFound: true,
        };
      }

      const cart = JSON.parse(cookies);

      if (cart.length === 0) {
        return {
          notFound: true,
        };
      }

      store.dispatch(updateCart(cart));

      return {
        props: {},
      };
    }
);
