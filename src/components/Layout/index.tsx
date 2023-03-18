import { ReactNode } from "react";
import {
  Header,
  IconContainer,
  IconCounterContainer,
} from "@/styles/pages/app";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { ModalShoppingCart } from "../ModalShoppingCart";

import logoImg from "../../assets/logo.svg";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { cartCount } = useShoppingCart();

  const hasItemsInCart = cartCount !== undefined && cartCount > 0;

  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />

        {hasItemsInCart ? (
          <IconContainer count-indicator={cartCount}>
            <Handbag size={24} />
          </IconContainer>
        ) : (
          <IconCounterContainer>
            <Handbag size={24} />
          </IconCounterContainer>
        )}
      </Header>
      {children}
      <ModalShoppingCart />
    </>
  );
}
