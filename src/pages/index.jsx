import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";
import Promo from "@/components/home-page/promo/Promo";
import GridItems from "@/components/home-page/grid-items/grid-item";
import Info from "@/components/home-page/info/info";
import { updateCart } from "@/lib/redux/slices/cartSlice";
import { wrapper } from "@/lib/redux/store";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Audiophile Main Page</title>
        <meta
          name="description"
          content="It's a main page of Audiophile E Commerce Shop where you can see some info about our products"
        />
        <meta
          property="og:description"
          content="It's a main page of Audiophile E Commerce Shop where you can see some info about our products"
        />
      </Head>

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
