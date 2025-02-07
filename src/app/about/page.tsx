"use client";

import React from "react";
import Image from "next/image";
import {FaPlay} from "react-icons/fa";
import Image1 from "../../../public/images/About route/img1.png";
import Image2 from "../../../public/images/About route/img2.png";
import Image3 from "../../../public/images/About route/img3.png";
import Aboutus from "../../../public/images/About route/About us.png";
import WhyChooseUsImage from "../../../public/images/About route/why choose us.png";
import BestChef from "../../../public/images/About route/Student.png"
import ItemFood from "../../../public/images/About route/Coffee.png"
import CleanEnvironment from "../../../public/images/About route/Person.png"
import Banner from "../component/banner";

export default function AboutSection() {
  return (
    <div>
      <Banner heading="About us" breadcrumb="About us" />
      <section className="flex flex-col lg:flex-row max-w-[80%] mx-auto items-center justify-center gap-8 lg:gap-16 p-6 lg:p-12">
        {/* Left Side: Images */}
        <div className="flex sm:gap-2 md:gap-4 md:w-1/2 justify-center">
          <div className="w-1/2">
            <Image src={Image1} alt="Tacos" className="object-cover rounded-lg" />
          </div>
          <div className="sm:gap-2 md:gap-4 w-1/2 mt-8">
            <Image src={Image2} alt="Fried Chicken" className="object-cover rounded-lg sm:mb-2 md:mb-4" />
            <Image src={Image3} alt="Salad and Juice" className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image src={Aboutus} alt="about" />
          </div>
          <h2 className="text-4xl font-bold text-ododod leading-snug mt-4">
            Food is an important <br /> part of a balanced Diet
          </h2>
          <p className="text-ododod text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
            pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisl, et ac dapibus
            sit eu velit in consequat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
            <button className="bg-primarycolororg text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e59400] transition">
              Show more
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-primarycolororg rounded-full text-white">
                <FaPlay />
              </div>
              <span className="text-primarycolororg font-medium">Watch video</span>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-ododod max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>
      
      {/* Image Section */}
      <div className="relative w-[70%] mx-auto mb-12">
        <Image
          src={WhyChooseUsImage}
          alt="Delicious Food"
          className="rounded-lg w-full object-cover"
        />
      </div>
      
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {/* Best Chef */}
        <div className="flex flex-col items-center text-center">
        <div className="w-[80px] h-[80px]">
            <Image src={BestChef} alt="Best Chef" />
          </div>
          <h3 className="text-xl font-semibold">Best Chef</h3>
          <p className="text-ododod text-sm max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam.
          </p>
        </div>

        {/* 120 Item Food */}
        <div className="flex flex-col items-center text-center">
        <div className="w-[80px] h-[80px]">
            <Image src={ItemFood} alt="Item Food" />
          </div>
          <h3 className="text-xl font-semibold">120 Item Food</h3>
          <p className="text-ododod text-sm max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam.
          </p>
        </div>

        {/* Clean Environment */}
        <div className="flex flex-col items-center text-center">
        <div className="w-[80px] h-[80px]">
            <Image src={CleanEnvironment} alt="Clean Environment" />
          </div>
          <h3 className="text-xl font-semibold">Clean Environment</h3>
          <p className="text-ododod text-sm max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
