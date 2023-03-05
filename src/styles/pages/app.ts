import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const IconContainer = styled("button", {
  width: "48px",
  height: "48px",
  backgroundColor: "$gray800",
  borderRadius: 6,
  border: 0,
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    opacity: "0.7",
    transition: "opacity 0.2s ease-in ease-out",
  },

  "&::before": {
    content: "attr(count-indicator)",
    position: "absolute",
    top: -7,
    left: 31,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 24,
    height: 24,
    border: "3px solid $121214",
    borderRadius: 1000,
    backgroundColor: "$green500",

    fontWeight: 700,
    fontSize: "0.875rem",
    color: "$white",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    color: "$gray500",
  },
});

export const IconCounterContainer = styled("button", {
  width: "48px",
  height: "48px",
  backgroundColor: "$gray800",
  borderRadius: 6,
  border: 0,
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    opacity: "0.7",
    transition: "opacity 0.2s ease-in ease-out",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    color: "$gray500",
  },
});
