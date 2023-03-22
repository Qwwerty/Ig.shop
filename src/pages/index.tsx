import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { CaretLeft, CaretRight, Handbag } from "@phosphor-icons/react";

import { useKeenSlider } from "keen-slider/react";

import {
  HomeContainer,
  NavigationContainer,
  Product,
} from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  priceId: string;
  currency: string;
  priceFormatted: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { addItem } = useShoppingCart();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    slides: {
      perView: 1.82,
      spacing: 48,
    },

    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function handleMoveSlideLeft(event: any) {
    event.stopPropagation() || instanceRef.current?.prev();
  }

  function handleMoveSlideRight(event: any) {
    event.stopPropagation() || instanceRef.current?.next();
  }

  function handleAddItem(
    event: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) {
    event.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      price_id: product.priceId,
      currency: product.currency,
      image: product.imageUrl,
    });
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef}>
        {loaded && instanceRef.current && (
          <>
            {currentSlide > 0 && (
              <CaretLeft
                onClick={handleMoveSlideLeft}
                size={48}
                className="arrow arrow-left"
              />
            )}
          </>
        )}

        <NavigationContainer className="keen-slider">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </div>

                  <button
                    onClick={(event) => handleAddItem(event, product)}
                    className="btn-shopping"
                  >
                    <Handbag size={32} />
                  </button>
                </footer>
              </Product>
            </Link>
          ))}

          {loaded && instanceRef.current && (
            <>
              {currentSlide < products.length - 1 && (
                <CaretRight
                  onClick={handleMoveSlideRight}
                  size={48}
                  className="arrow arrow-right"
                />
              )}
            </>
          )}
        </NavigationContainer>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceId: price.id,
      price: price.unit_amount,
      currency: price.currency,
      priceFormatted: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
