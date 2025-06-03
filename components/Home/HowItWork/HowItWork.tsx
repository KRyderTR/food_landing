import React from "react";
import HowItWorkCard from "./HowItWorkCard";
import { howItWorksData } from "@/constant/how-it-works-data";

const HowItWork = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Lets see how it works
      </h1>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {howItWorksData.map((data) => (
            <HowItWorkCard key={data.num} num={data.num} image={data.image} title={data.title} description={data.description} />
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
