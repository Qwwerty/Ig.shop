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
