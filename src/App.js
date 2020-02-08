import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Featured from "./components/Featured";
import Bestsellers from "./components/Bestsellers";
import SmallProducts from "./components/SmallProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Showcase />
      <Featured />
      <Bestsellers />
      <SmallProducts />
      <Footer />
    </>
  );
}

export default App;
