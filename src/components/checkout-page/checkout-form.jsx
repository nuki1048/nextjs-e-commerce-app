import React from "react";
import styles from "./checkout-form.module.css";
import Input from "../input/input";
import Container from "../container/Container";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Radio from "../radio/radio";
import CartItem from "./cart-item";
import Button from "../button/Button";
import Image from "next/image";

import ThanksfulModal from "../thanksful-modal/thanksful-modal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import { clearCart } from "@/lib/redux/slices/cartSlice";
import Cookies from "js-cookie";

const CheckoutForm = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const totalWitoutTaxesAndDelivery = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const taxes = Math.round((totalWitoutTaxesAndDelivery / 100) * 7.66);
  const totalWithTax = Math.round(totalWitoutTaxesAndDelivery + taxes);
  const delivery = 50;
  const totalWithTaxAndDelivery = totalWithTax + delivery;
  const schema = yup
    .object({
      email: yup.string().email().required(),
      name: yup.string().min(1).required(),
      telephone: yup.number().min(5).required(),
      address: yup.string().required(),
      zipCode: yup.number().min(5).required(),
      country: yup.string().required(),
      city: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showModal, setModalShow] = useState(false);

  const onSubmit = async (data) => {
    const order = {
      billingDetails: {
        name: data.name,
        telephone: data.telephone,
        email: data.email,
      },
      deliveryInfo: {
        address: data.address,
        zipCode: data.zipCode,
        country: data.country,
        city: data.city,
      },
      paymentMethod: data.paymentMethod,
      summary: totalWithTaxAndDelivery,
      products: {
        ...cartItems,
      },
    };

    await fetch("../api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then((res) => {
      setModalShow(true);
      setTimeout(() => {
        setModalShow(false);
        dispatch(clearCart());
        router.push("/");
      }, 6000);
    });
  };
  return (
    <section className={styles.section}>
      <Container>
        <button onClick={() => router.back()} className={styles.link}>
          Go back
        </button>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.main}>
            <h2>Checkout</h2>
            <div className={styles.billing}>
              <h4>Billing Details</h4>
              <div className={styles.controls}>
                <Input
                  register={register("name", { required: true })}
                  error={errors.name}
                  label="Name"
                  placeholder={"Alexei Ward"}
                />
                <Input
                  register={register("email", { required: true })}
                  error={errors.email}
                  label="Email Address"
                  placeholder={"alexei@mail.com"}
                />
                <Input
                  register={register("telephone", { required: true })}
                  error={errors.telephone}
                  label="Phone Number"
                  placeholder={"+1 202-555-0136"}
                />
              </div>
            </div>
            <div className={styles.shipping}>
              <h4>shipping info</h4>
              <div className={styles.controls}>
                <Input
                  register={register("address", { required: true })}
                  error={errors.address}
                  label="Your Address"
                  placeholder={"1137 Williams Avenue"}
                />
                <Input
                  register={register("zipCode", { required: true })}
                  error={errors.zipCode}
                  label="ZIP Code"
                  placeholder={"10001"}
                />
                <Input
                  register={register("city", { required: true })}
                  error={errors.city}
                  label="City"
                  placeholder={"New York"}
                />
                <Input
                  register={register("country", { required: true })}
                  error={errors.country}
                  label="Country"
                  placeholder={"United States"}
                />
              </div>
            </div>
            <div className={styles.payment}>
              <h4>payment details</h4>
              <div className={styles.method}>
                <h6>Payment Method</h6>
                <Radio
                  register={register("paymentMethod", { required: true })}
                  error={errors.paymentMethod}
                  label="e-Money"
                  value="e-Money"
                  borderShow={watch("paymentMethod") === "e-Money"}
                />
                <Radio
                  register={register("paymentMethod", { required: true })}
                  error={errors.paymentMethod}
                  label="Cash on Delivery"
                  value="Cash on Delivery"
                  borderShow={watch("paymentMethod") === "Cash on Delivery"}
                />
              </div>
              {watch("paymentMethod") === "e-Money" && (
                <div className={styles.controls}>
                  <Input
                    register={register("eMoneyNumber", { required: false })}
                    error={errors.eMoneyNumber}
                    label="e-Money Number"
                    placeholder={"238521993"}
                  />
                  <Input
                    register={register("eMoneyPin", { required: false })}
                    error={errors.eMoneyPin}
                    label="e-Money PIN"
                    placeholder={"6891"}
                  />
                </div>
              )}
              {watch("paymentMethod") === "Cash on Delivery" && (
                <div className={styles.delivery}>
                  <Image
                    src="assets/checkout/icon-cash-on-delivery.svg"
                    alt="icon delivery"
                    width={30}
                    height={30}
                  />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
          <aside className={styles.aside}>
            <h2>Summary</h2>
            <ul className={styles["cart-items"]}>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} data={cartItem} />
              ))}
            </ul>
            <div className={styles.info}>
              <div className={styles["info-item"]}>
                <span className={styles.name}>TOTAL</span>
                <span className={styles.price}>
                  $ {totalWitoutTaxesAndDelivery}
                </span>
              </div>
              <div className={styles["info-item"]}>
                <span className={styles.name}>SHIPPING</span>
                <span className={styles.price}>$ {delivery}</span>
              </div>
              <div className={styles["info-item"]}>
                <span className={styles.name}>VAT (INCLUDED)</span>
                <span className={styles.price}>$ {taxes}</span>
              </div>
              <div className={styles["info-item-total"]}>
                <span className={styles.name}>GRAND TOTAL</span>
                <span className={styles.price}>
                  $ {totalWithTaxAndDelivery}
                </span>
              </div>
            </div>
            <Button style={{ marginTop: "32px" }}>CONTINUE & PAY</Button>
          </aside>
        </form>
      </Container>
      <ThanksfulModal isShow={showModal} total={totalWithTaxAndDelivery} />
    </section>
  );
};

export default CheckoutForm;
