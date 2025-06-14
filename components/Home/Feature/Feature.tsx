import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/constant/features";

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Meet our Quality Features
      </h1>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
