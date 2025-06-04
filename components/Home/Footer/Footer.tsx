import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-800">
      {/* Top part */}
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
              <MdDeliveryDining className="w-6 h-6 text-black" />
            </div>

            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              Foodie
            </h1>
          </div>

          <p className="mt-4 text-gray-200 font-medium">
            Our delivery platform makes ordering from local restaurants fast,
            easy, and trackable — all in one seamless app.
          </p>

          <div className="mt-6 flex items-center space-x-2">
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white rounded-full">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white rounded-full">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-sky-400 text-white rounded-full">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* 2st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">News & Press</p>
          <p className="footer__link">Our Customers</p>
          <p className="footer__link">Leadership</p>
          <p className="footer__link">Careers</p>
        </div>

        {/* 3st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Resources</h1>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Webinar & Events</p>
          <p className="footer__link">Podcast</p>
          <p className="footer__link">E-Book & Guides</p>
        </div>

        {/* 4st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Contact us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              +1234982304
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Email</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              foodie@gmail.com
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center text-gray-400 md:text-left">
          Copyright © 2025 Rom Charit. All rights reserved
        </p>

        <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
          <span className="text-gray-400">Social : </span>
          <span className="hover:text-gray-500 text-gray-400 cursor-pointer">
            <FaFacebook />
          </span>
          <span className="hover:text-gray-500 text-gray-400 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="hover:text-gray-500 text-gray-400 cursor-pointer">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
