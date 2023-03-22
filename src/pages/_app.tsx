import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import { globalStyles } from "@/styles/global";

import { Container } from "@/styles/pages/app";
import Layout from "@/components/Layout";
import NProgress from "nprogress";
import { Router } from "next/router";

globalStyles();

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/`}
      currency="BRL"
      allowedCountries={["US", "BR", "CA"]}
      billingAddressCollection={true}
      shouldPersist
    >
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </CartProvider>
  );
}
