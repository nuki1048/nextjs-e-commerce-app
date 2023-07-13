import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";
import Promo from "@/components/home-page/promo/Promo";
import GridItems from "@/components/home-page/grid-items/grid-item";
import Info from "@/components/home-page/info/info";
import { useEffect } from "react";
import { pushNewOrder, startBot } from "@/lib/telegram";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, updateCart } from "@/lib/redux/slices/cartSlice";
import { wrapper } from "@/lib/redux/store";

export default function Home({ cart }) {
  return (
    <main>
      <Promo />
      <div className="margin">
        <Container>
          <CategoryLinks />
        </Container>
        <GridItems />
        <Info />
      </div>
    </main>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      const cookies = req.cookies.cart;
      if (cookies) {
        const cart = JSON.parse(cookies);
        if (cart.length > 0) {
          store.dispatch(updateCart(cart));
        }
      }
      return {
        props: {},
      };
    }
);
