import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Aboutus() {
  return (
    <div className="bg-ododod text-white flex justify-center py-8">
      <div className="flex flex-col md:flex-row h-auto md:h-[562px] w-full md:w-[1320px] px-4 md:px-0 gap-10">
        {/* Left Div */}
        <div className="flex flex-col items-start w-full md:w-[562px]">
          <Image
            src="/images/Aboutus/About us.png" // Corrected path
            alt="About Us"
            height={50}
            width={100}
          />
          <h1 className="text-[32px] md:text-[48px] font-bold whitespace-pre-wrap">
            <span className="text-primarycolororg">We</span> Create the Best
            Foody Product
          </h1>
          <p className="text-[12px] md:text-[16px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex items-center gap-4">
              <FaCheck className="text-primarycolororg" size={24} />
              <p className="text-[12px] md:text-[16px]">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheck className="text-primarycolororg" size={24} />
              <p className="text-[12px] md:text-[16px]">
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheck className="text-primarycolororg" size={24} />
              <p className="text-[12px] md:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <button className="bg-primarycolororg text-white w-[120px] h-[40px] md:w-[190px] md:h-[60px] rounded-full mt-8 hover:bg-yellow-800 transition-colors">
            See More
          </button>
        </div>

        {/* Right Div */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/Aboutus/Img1.png" // Corrected path
            alt="Main Image"
            height={330}
            width={660}
            className="rounded-lg"
          />
          <div className="flex gap-4">
            <Image
              src="/images/Aboutus/Img2.png" // Corrected path
              alt="Secondary Image 1"
              height={192}
              width={322}
              className="rounded-lg"
            />
            <Image
              src="/images/Aboutus/Img3.png" // Corrected path
              alt="Secondary Image 2"
              height={192}
              width={322}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
