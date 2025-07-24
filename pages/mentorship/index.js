import React from "react";
import Hero from "./Hero";
import Mentorship from "./Mentorship";
import Price from "./Price";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "./FAQSection";
import CallToAction from "./CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <Hero />
      <Mentorship />
      <Price />
      <TestimonialSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
