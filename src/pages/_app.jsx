"use client";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { Manrope } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
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
      <main className={manrope.className}>
        <Provider store={store}>
          <Layout>
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
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </main>
    </>
  );
}
