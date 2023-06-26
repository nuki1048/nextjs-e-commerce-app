import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Manrope } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Audiophile</title>
      </Head>
      <Provider store={store}>
        <main className={manrope.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </Provider>
    </>
  );
}
