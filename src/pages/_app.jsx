import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "@/lib/redux/store";
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
        <title>Audiophile E-Commerce-Shop </title>
        <meta name="title" content="Audiophile E-Commerce-Shop " />
        <meta
          name="description"
          content="Audiophile is an all in one stop to fulfill your audio needs.We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io" />
        <meta property="og:title" content="Audiophile E-Commerce-Shop " />
        <meta
          property="og:description"
          content="Audiophile is an all in one stop to fulfill your audio needs.We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io" />
        <meta property="twitter:title" content="Audiophile E-Commerce-Shop " />
        <meta
          property="twitter:description"
          content="Audiophile is an all in one stop to fulfill your audio needs.We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />

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
