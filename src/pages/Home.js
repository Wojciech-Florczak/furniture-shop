import React from "react";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Featured from "../components/Featured";
import Bestsellers from "../components/Bestsellers";
import SmallProducts from "../components/SmallProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Featured />
      <Bestsellers />
      <SmallProducts />
    </>
  );
}
