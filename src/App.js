import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductShow from "./pages/ProductShow";
import ScrollToTop from "./components/ScrollToTop";
import ProductAll from "./components/ProductAll";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product" render={() => <ProductAll />} />
        <Route
          path="/product/:id"
          render={routeProps => <ProductShow {...routeProps} />}
        ></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
