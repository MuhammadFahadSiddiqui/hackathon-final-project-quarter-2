import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Aboutus() {
  return (
    <div className="bg-ododod text-white flex justify-center py-8 px-[10%]">
      <div className="flex flex-col md:flex-row h-auto md:h-[562px] w-full max-w-[1320px] gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-start w-full md:w-[50%]">
          <Image
            src="/images/Aboutus/About us.png"
            alt="About Us"
            height={50}
            width={100}
            className="mb-4"
          />
          <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold whitespace-pre-wrap">
            <span className="text-primarycolororg">We</span> Create the Best
            Foody Product
          </h1>
          <p className="text-[14px] sm:text-[16px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex items-start gap-3">
              <FaCheck className="text-primarycolororg" size={20} />
              <p className="text-[14px] sm:text-[16px]">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-primarycolororg" size={20} />
              <p className="text-[14px] sm:text-[16px]">
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-primarycolororg" size={20} />
              <p className="text-[14px] sm:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <button className="bg-primarycolororg text-white w-[140px] sm:w-[160px] md:w-[190px] h-[40px] md:h-[60px] rounded-full mt-6 hover:bg-yellow-800 transition-colors">
            See More
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 w-full md:w-[50%]">
          <Image
            src="/images/Aboutus/Img1.png"
            alt="Main Image"
            height={330}
            width={660}
            className="rounded-lg w-full"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src="/images/Aboutus/Img2.png"
              alt="Secondary Image 1"
              height={192}
              width={322}
              className="rounded-lg w-full sm:w-[48%]"
            />
            <Image
              src="/images/Aboutus/Img3.png"
              alt="Secondary Image 2"
              height={192}
              width={322}
              className="rounded-lg w-full sm:w-[48%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
