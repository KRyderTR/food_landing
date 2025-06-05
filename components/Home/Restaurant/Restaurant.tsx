import React from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantDemoData } from "@/constant/restaurant-demo-data";

const Restaurant = () => {
  const demoList = RestaurantDemoData;

  return (
    <div className="pt-16 pb-16">
      <div className="text-xl sm:text-2xl text-center font-extrabold">
        Available Restaurant Nearby Area
      </div>

      <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {demoList.map((data, index) => (
          <div
            key={data.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
          >
            <RestaurantCard image={data.image} title={data.title} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-9 py-2 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white dark:text-black hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200">
          Discover More &rarr;
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
