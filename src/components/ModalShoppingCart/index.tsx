import Image from "next/image";
import { Minus, Plus, X } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import {
  Container,
  Wrapper,
  ShoppingCart,
  ShoppingCartItem,
  ShoppingCheckout,
  ShoppingSliderContainer,
} from "@/styles/components/ModalShoppingCart";

import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";

interface ModalShoppingCartProps {
  onToggle: () => void;
  isOpen: boolean;
}

export function ModalShoppingCart({
  onToggle,
  isOpen,
}: ModalShoppingCartProps) {
  const {
    cartDetails,
    formattedTotalPrice,
    cartCount,
    incrementItem,
    decrementItem,
  } = useShoppingCart();
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    vertical: true,
    slides: {
      perView: 4,
      spacing: 24,
    },
  });

  const items = Object.values(cartDetails || []);
  const classToggle = isOpen ? "opening" : "closing";
  const countItems =
    cartCount === 1 ? `${cartCount} item` : `${cartCount} itens`;

  function toggle() {
    onToggle();
  }

  function handleOutside(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;

    if (!target.matches(".shopping-cart-modal-container")) {
      return;
    }

    onToggle();
  }

  async function handleCheckout() {
    const itemsToStripe = items.map((item) => ({
      price: item.price_id,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post("/api/checkout", {
        line_items: itemsToStripe,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container
      onClick={handleOutside}
      className={`shopping-cart-modal-container ${classToggle}`}
    >
      <Wrapper className={`${classToggle}`.trim()}>
        <X onClick={toggle} className="shopping-cart-modal-close" />
        <ShoppingCart>
          <h6>Sacola de compras</h6>

          <ShoppingSliderContainer
            ref={ref}
            className="keen-slider shopping-cart-slider-container"
          >
            {items.map((item) => (
              <ShoppingCartItem className="keen-slider__slide" key={item.id}>
                <div className="shopping-cart-item-image">
                  <Image src={item.image!} width={94} height={94} alt="" />
                </div>
                <div className="shopping-cart-item-about">
                  <span>{item.name}</span>
                  <span>{item.formattedValue}</span>
                  <div className="shopping-cart-item-about-counter">
                    <Minus onClick={() => decrementItem(item.id)} />
                    <span>{item.quantity}</span>
                    <Plus onClick={() => incrementItem(item.id)} />
                  </div>
                </div>
              </ShoppingCartItem>
            ))}
          </ShoppingSliderContainer>
        </ShoppingCart>

        <ShoppingCheckout>
          <article>
            <div>
              <span>Quantidade</span>
              <span>{countItems}</span>
            </div>

            <div>
              <span>Valor total</span>
              <span>{formattedTotalPrice}</span>
            </div>
          </article>

          <button disabled={cartCount === 0} onClick={handleCheckout}>
            Finalizar compra
          </button>
        </ShoppingCheckout>
      </Wrapper>
    </Container>
  );
}
