import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";
import Promo from "@/components/home-page/promo/Promo";
import GridItems from "@/components/home-page/grid-items/grid-item";
import Info from "@/components/home-page/info/info";
import { useEffect } from "react";
import { pushNewOrder, startBot } from "@/lib/telegram";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  deleteItemFromCart,
} from "@/lib/redux/slices/cartSlice";
import { checkEnvironment } from "@/lib/url";

export default function Home({ cart }) {
  // Cookies.set("home", [{ key: "1" }, { key: "2" }, { key: "3" }], {
  //   expires: 1 / 24,
  // });
  // const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  // useEffect(() => {
  //   fetch(checkEnvironment().concat(`/api/products`))
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);
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
// export async function getServerSideProps({ req, res }) {
//   const cartCookies = req.cookies.cart;

//   return {
//     props: {
//       cart: cartCookies || [],
//     },
//   };
// }
