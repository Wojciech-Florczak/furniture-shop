import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
import "./iconsConfig";
import Home from "./pages/Home/";
import ProductShow from "./pages/ProductShow/";
import ProductsAll from "./pages/ProductsAll/";
import About from "./pages/About/";
import Navigation from "./components/Layout/Navigation/";
import Footer from "./components/Layout/Footer/";
import ScrollToTop from "./components/Layout/ScrollToTop/";

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
            <Route exact path="/products" render={() => <ProductsAll />} />
            <Route
              path="/products/:id"
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
