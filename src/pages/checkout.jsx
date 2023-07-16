import CheckoutForm from "@/components/checkout-page/checkout-form";
import { wrapper } from "@/lib/redux/store";
import { updateCart } from "@/lib/redux/slices/cartSlice";
import Head from "next/head";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <Head>
        <title>Checkout Page({cartItems.length})</title>
        <meta
          property="og:title"
          content={`Checkout Page(${cartItems.length})`}
        />
      </Head>
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
