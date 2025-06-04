import Image from "next/image";
import React from "react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div>
      <Image
        src={icon}
        alt="icon"
        width={100}
        height={100}
        className="mx-auto object-contain"
      />

      <h1 className="mt-8 text-lg font-bold text-center">{title}</h1>

      <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
