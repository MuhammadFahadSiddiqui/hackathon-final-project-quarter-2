"use client";

import React from "react";
import Image from "next/image";

interface BannerProps {
  heading: string;
  breadcrumb: string;
}

const Banner: React.FC<BannerProps> = ({ heading, breadcrumb }) => {
  return (
    <div>
      {/* Image Section with Centered Text */}
      <div className="relative">
        <Image
          alt="Background"
          src="/images/SendonderyNevBar/SendonderyNevBar.png"
          width={1920}
          height={410}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          {/* Heading Text */}
          <p className="text-white text-[6vw] md:text-[6vw] lg:text-[65px] font-bold">
            {heading}
          </p>
          {/* Breadcrumb Navigation */}
          <div className="mt-3 text-[4vw] md:text-[4vw] lg:text-[20px] flex items-center justify-center gap-2">
            <p className="text-white">Home</p>
            <Image
              alt="CaretRight"
              src="/images/SendonderyNevBar/CaretRight.png"
              width={16}
              height={16}
            />
            <p className="text-primarycolororg">{breadcrumb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
