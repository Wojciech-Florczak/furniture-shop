import React from "react";
import { useStyles } from "./styles";
import Map from "../../components/Contact/Map";
import Information from "../../components/Contact/Information";
import Data from "../../components/Contact/Data";
import Form from "../../components/Contact/Form";
export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Map />
      <Information />
      <Data />
      <Form />
    </div>
  );
}
