import React from "react";
import Map from "../../components/Contact/Map";
import Information from "../../components/Contact/Information";
import Data from "../../components/Contact/Data";
import Form from "../../components/Contact/Form";
import Section from "../../components/Layout/Section";

export default function Contact() {
  return (
    <div>
      <Section>
        <Map />
      </Section>
      <Section className="mt-5 mb-5">
        <Information />
      </Section>
      <Section className="mt-5 mb-5" bg>
        <Data />
      </Section>
      <Section className="mt-5 mb-5">
        <Form />
      </Section>
    </div>
  );
}
