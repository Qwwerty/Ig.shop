import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import {
  Container,
  Wrapper,
  ShoppingCart,
  ShoppingCartItem,
  ShoppingCheckout,
  ShoppingSliderContainer,
} from "@/styles/components/ModalShoppingCart";

import tshirtImg from "../../assets/camisetas/1.png";
import { useState } from "react";

interface ModalShoppingCartProps {
  onToggle: () => void;
}

export function ModalShoppingCart({ onToggle }: ModalShoppingCartProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    vertical: true,
    slides: {
      perView: 4,
      spacing: 24,
    },
  });

  function toggle() {
    setIsClosing(true);

    setTimeout(() => {
      onToggle();
    }, 2000);
  }

  return (
    <Container>
      <Wrapper className={`${isClosing ? "closing" : ""}`.trim()}>
        <X onClick={toggle} />
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
      </Wrapper>
    </Container>
  );
}
