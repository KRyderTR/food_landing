import React from "react";
import { MdDeliveryDining } from "react-icons/md";

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col">
                    <MdDeliveryDining className="w-6 h-6 text-white"/>
                </div>
                <h1 className="text-xl hidden sm:block md:text-2xl text-black font-bold">
                    Foodie
                </h1>
            </div>
        </div>
    </div>
  );
};

export default Nav;
