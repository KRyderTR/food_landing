import React from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Category from "./Category/Category";
import HowItWork from "./HowItWork/HowItWork";
import About from "./About/About";
import Feature from "./Feature/Feature";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return <div className="overflow-hidden">
    <Hero />
    <Restaurant />
    <Category />
    <HowItWork />
    <About />
    <Feature />
    <ClientReview />
  </div>;
};

export default Home;
