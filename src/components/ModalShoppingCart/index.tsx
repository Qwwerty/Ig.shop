import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import {
  Container,
  ShoppingCart,
  ShoppingCartItem,
  ShoppingCheckout,
  ShoppingSliderContainer,
} from "@/styles/components/ModalShoppingCart";

import tshirtImg from "../../assets/camisetas/1.png";

export function ModalShoppingCart() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    vertical: true,
    slides: {
      perView: 4,
      spacing: 24,
    },
  });

  return (
    <Container>
      <X />
      <ShoppingCart>
        <h6>Sacola de compras</h6>

        <ShoppingSliderContainer
          ref={ref}
          className="keen-slider shopping-cart-slider-container"
        >
          <ShoppingCartItem className="keen-slider__slide">
            <div className="shopping-cart-item-image">
              <Image src={tshirtImg} alt="" />
            </div>
            <div className="shopping-cart-item-about">
              <span>Camiseta Beyond the Limits</span>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </ShoppingCartItem>
        </ShoppingSliderContainer>
      </ShoppingCart>

      <ShoppingCheckout>
        <article>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>

          <div>
            <span>Valor total</span>
            <span>R$ 270,00</span>
          </div>
        </article>

        <button>Finalizar compra</button>
      </ShoppingCheckout>
    </Container>
  );
}
