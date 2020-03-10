import React from "react";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductShow from "./pages/ProductShow";
import ScrollToTop from "./components/Layout/ScrollToTop";
import ProductAll from "./pages/ProductAll";
import About from "./pages/About";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <ProductsProvider>
            <Route exact path="/product" render={() => <ProductAll />} />
            <Route
              path="/product/:id"
              render={routeProps => <ProductShow {...routeProps} />}
            ></Route>
          </ProductsProvider>
        </Switch>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
