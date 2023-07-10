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
import Link from "next/link";
import Image from "next/image";

import ThanksfulModal from "../thanksful-modal/thanksful-modal";

const CheckoutForm = ({}) => {
  //   const schema = yup
  //     .object({
  //       example: yup.string().email().required(),
  //       age: yup.number().positive().integer().required(),
  //     })
  //     .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   {
  //     resolver: yupResolver(schema),
  //   }

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className={styles.section}>
      <Container>
        <Link href="/" className={styles.link}>
          Go back
        </Link>
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
              <CartItem />
              <CartItem />
              <CartItem />
            </ul>
            <div className={styles.info}>
              <div className={styles["info-item"]}>
                <span className={styles.name}>TOTAL</span>
                <span className={styles.price}>$ 5,396</span>
              </div>
              <div className={styles["info-item"]}>
                <span className={styles.name}>SHIPPING</span>
                <span className={styles.price}>$ 50</span>
              </div>
              <div className={styles["info-item"]}>
                <span className={styles.name}>VAT (INCLUDED)</span>
                <span className={styles.price}>$ 1,079</span>
              </div>
              <div className={styles["info-item-total"]}>
                <span className={styles.name}>GRAND TOTAL</span>
                <span className={styles.price}>$ 1,079</span>
              </div>
            </div>
            <Button style={{ marginTop: "32px" }}>CONTINUE & PAY</Button>
          </aside>
        </form>
      </Container>
      {/* <ThanksfulModal /> */}
    </section>
  );
};

export default CheckoutForm;
