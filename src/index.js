import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
// Icons config
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcAmazonPay,
  faCcPaypal,
  faCcMastercard,
  faCcApplePay,
  faTwitter,
  faFacebook,
  faGooglePlus,
  faYoutube,
  faLinkedinIn,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faSearch,
  faExternalLinkAlt,
  faHeart,
  faShoppingCart,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCcVisa,
  faCcAmazonPay,
  faCcPaypal,
  faCcMastercard,
  faCcApplePay,
  faTwitter,
  faFacebook,
  faGooglePlus,
  faYoutube,
  faLinkedinIn,
  faWhatsapp
);


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
