import React from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Category from "./Category/Category";
import HowItWork from "./HowItWork/HowItWork";

const Home = () => {
  return <div className="overflow-hidden">
    <Hero />
    <Restaurant />
    <Category />
    <HowItWork />
  </div>;
};

export default Home;
