import { ReactNode, useState } from "react";
import {
  Header,
  IconContainer,
  IconCounterContainer,
} from "@/styles/pages/app";
import { useRouter } from "next/router";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { ModalShoppingCart } from "../ModalShoppingCart";

import logoImg from "../../assets/logo.svg";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartCount } = useShoppingCart();
  const { asPath } = useRouter();

  const hasItemsInCart = cartCount !== undefined && cartCount > 0;

  function handleOpenCart() {
    setIsModalOpen(!isModalOpen);
  }

  function ButtonCart() {
    if (asPath.match("success")) {
      return;
    }

    if (hasItemsInCart) {
      return (
        <IconContainer
          onClick={handleOpenCart}
          disabled={isModalOpen}
          count-indicator={cartCount}
        >
          <Handbag size={24} />
        </IconContainer>
      );
    }

    return (
      <IconCounterContainer onClick={handleOpenCart} disabled={isModalOpen}>
        <Handbag size={24} />
      </IconCounterContainer>
    );
  }

  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />
        <ButtonCart />
      </Header>
      {children}

      <ModalShoppingCart isOpen={isModalOpen} onToggle={handleOpenCart} />
    </>
  );
}
