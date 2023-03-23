import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ImageContent,
  SuccessContainer,
} from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  const countItems = productsImages.length;
  const textTShirt = countItems >= 2 ? `${countItems} camisetas` : "1 camiseta";
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {productsImages.map((image, index) => (
            <ImageContent key={index} className="image-content">
              <Image src={image} width={120} height={110} alt="" />
            </ImageContent>
          ))}
        </ImageContainer>

        <h1>Purchase made!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, your purchase {textTShirt} is
          already on the way to your house.
        </p>

        <Link href="/">Back to catalog</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const productsImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return product.images[0];
  });

  console.log(productsImages);

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
