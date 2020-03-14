import React from "react";
import Hero from "../../components/Home/Hero";
import Showcase from "../../components/Home/Showcase";
import Featured from "../../components/Home/Featured";
import Bestsellers from "../../components/Home/Bestsellers";
import SmallProducts from "../../components/Home/SmallProducts";

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
