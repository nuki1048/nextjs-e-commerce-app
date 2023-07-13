"use client";
import "@/styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import { wrapper } from "@/lib/redux/store";
import { Manrope } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";
import App, { AppProps } from "next/app";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { updateCart } from "@/lib/redux/slices/cartSlice";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

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
      <main className={manrope.className}>
        <Provider store={store}>
          <Layout>
            <div style={{ zIndex: "10000" }}>
              <AnimatedCursor
                innerSize={8}
                outerSize={34}
                innerScale={1}
                outerScale={1.5}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                  backgroundColor: "var(--brand-orange)",
                }}
                outerStyle={{
                  border: "2px solid var(--brand-orange)",
                }}
              />
            </div>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </main>
    </>
  );
}
