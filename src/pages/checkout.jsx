import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CheckoutForm from "@/components/checkout-page/checkout-form";

const CheckoutPage = () => {
  const schema = yup
    .object({
      example: yup.string().email().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <CheckoutForm />
    </>
  );
};

export default CheckoutPage;
