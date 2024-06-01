"use client";

//components
import { SmallScreenNavbar } from "./components/SmallScreenNavbar";
import { WideScreenNavbar } from "./components/WideScreenNavbar";

//hooks
import { useWindowSize } from "@/core/hooks/useWindowSize";

export const Navbar = () => {
  const { width } = useWindowSize();

  if (!width) return null;

  return width <= 640 ? <SmallScreenNavbar /> : <WideScreenNavbar />;
};
