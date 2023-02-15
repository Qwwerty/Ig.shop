import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import { globalStyles } from "@/styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY!}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      allowedCountries={["US", "BR", "CA"]}
      billingAddressCollection={true}
      shouldPersist
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
