import { Header, IconContainer, IconCounterContainer } from "@/styles/pages/app";
import Image from "next/image";
import { ReactNode } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useShoppingCart } from "use-shopping-cart";
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
            <FiShoppingBag size={24} />
          </IconContainer>
        ) : (
          <IconCounterContainer>
            <FiShoppingBag size={24} />
          </IconCounterContainer>
        )}
      </Header>
      {children}
    </>
  );
}
