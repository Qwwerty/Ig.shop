import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  position: "relative",

  ".arrow": {
    position: "absolute",
    zIndex: 1,
    cursor: "pointer",

    "&.arrow-left": {
      bottom: "50%",
      left: "16px",
    },

    "&.arrow-right": {
      bottom: "50%",
      right: "16px",
    },
  },
});

export const NavigationContainer = styled("div", {
  display: "flex",
  width: "100%",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  minWidth: 696,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.9)",

    div: {
      display: "flex",
      flexDirection: "column",
      gap: 4,

      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 6,
      backgroundColor: "$green500",
      border: 0,
      outline: "none",
      cursor: "pointer",

      "&:hover": {
        opacity: 0.8,
        transition: "opacity 0.2s ease-in-out",
      },

      svg: {
        color: "$white",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
