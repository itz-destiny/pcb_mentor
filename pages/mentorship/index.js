import React from "react";
import Hero from "./Hero";
import Mentorship from "./Mentorship";
import Price from "./Price";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "./FAQSection";
import CallToAction from "./CallToAction";
import Footer from "../components/Footer";
import CourseOutline from "./CourseOutline";

const Index = () => {
  return (
    <div>
      <Hero />
      <Mentorship />
      <Price />
      <CourseOutline />
      <TestimonialSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
