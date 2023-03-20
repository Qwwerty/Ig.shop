import { keyframes } from "@stitches/react";
import { styled } from "../..";

const fadeIn = keyframes({
  "0%": { right: "-30rem" },
  "100%": { right: 0 },
});

const fadeOut = keyframes({
  "0%": { right: 0 },
  "100%": { right: "-31rem" },
});

export const Container = styled("main", {
  position: "absolute",
  left: 0,
  top: 0,
  overflow: "hidden",
  width: "100%",
  minHeight: "100vh",
  zIndex: 2,

  "&.opening": {
    display: "initial",
  },

  "&.closing": {
    display: "none",
  },
});

export const Wrapper = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,

  width: "30rem",
  height: "100%",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "4.5rem 3rem 3rem 3rem",

  ".shopping-cart-modal-close": {
    position: "absolute",
    top: 24,
    right: 24,

    width: "1.5rem",
    height: "1.5rem",
    color: "$gray500",
    cursor: "pointer",

    "&:hover": {
      color: "$gray300",
      transition: "color 0.2s",
    },
  },

  "&.opening": {
    "animation-name": `${fadeIn}`,
    "animation-duration": "1.5s",
    "animation-fill-mode": "forwards",
  },

  "&.closing": {
    "animation-name": `${fadeOut}`,
    "animation-duration": "2s",
    "animation-fill-mode": "forwards",
  },
});

export const ShoppingSliderContainer = styled("div", {
  flex: 1,
  width: "100%",
  height: "100%",
  maxHeight: "31.25rem",
});

export const ShoppingCart = styled("section", {
  flex: 1,

  display: "flex",
  flexDirection: "column",

  h6: {
    marginBottom: "2rem",

    fontWeight: 700,
    fontSize: "1.25rem",
    color: "$gray100",
    lineHeight: "2rem",
  },
});

export const ShoppingCartItem = styled("div", {
  display: "flex",
  gap: "1.25rem",

  minHeight: "5.875rem !important",
  maxHeight: "5.875rem !important",
  height: "100%",
  padding: "0.25rem",

  ".shopping-cart-item-image": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    img: {
      width: "6.25rem",
      height: "6.25rem",
      objectFit: "cover",
    },
  },

  ".shopping-cart-item-about": {
    display: "flex",
    flexDirection: "column",

    "span:nth-child(1)": {
      fontSize: "1.125",
      color: "$gray300",
      lineHeight: "1,8rem",
    },

    "span:nth-child(2)": {
      marginTop: "0.125rem",

      display: "block",
      fontWeight: "bold",
      fontSize: "1.125rem",
      color: "$gray100",
      lineHeight: "1.8rem",
    },

    ".shopping-cart-item-about-counter": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "6rem",
      height: "2.375rem",
      padding: "0 0.5rem",

      svg: {
        color: "$green500",
        cursor: "pointer",

        "&:hover": {
          color: "$green300",
          transition: "color 0.2s",
        },
      },
    },
  },
});

export const ShoppingCheckout = styled("section", {
  width: "100%",

  article: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4375rem",

    "div:nth-child(1)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "span:nth-child(1)": {
        fontSize: "1rem",
        color: "$gray100",
        lineHeight: "1.6rem",
      },

      "span:nth-child(2)": {
        fontSize: "1.125rem",
        color: "$gray300",
        lineHeight: "1.8rem",
      },
    },

    "div:nth-child(2)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "span:nth-child(1)": {
        fontSize: "1.125rem",
        color: "$gray100",
        lineHeight: "1.8rem",
      },

      "span:nth-child(2)": {
        fontSize: "1.5rem",
        color: "$gray100",
        lineHeight: "2.1rem",
      },
    },
  },

  button: {
    marginTop: "4.8125rem",

    width: "100%",
    height: "4.3125rem",

    backgroundColor: "$green500",
    borderRadius: 8,
    padding: "20px 32px",
    border: 0,
    outline: "none",
    cursor: "pointer",

    fontWeight: "700",
    fontSize: "1.125rem",
    color: "$white",
    lineHeight: "1.8rem",

    "&:hover": {
      backgroundColor: "$green300",
      transition: "background 0.2s ",
    },
  },
});
