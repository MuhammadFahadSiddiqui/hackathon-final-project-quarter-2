import React from "react";
import Image from "next/image";

export default function Foodcategory() {
  return (
    <div className="bg-ododod text-white py-8 px-[10%]">
      {/* Main Container */}
      <div className="flex flex-col items-center max-w-[1320px] mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/Foodcategory/Food Category.png"
            alt="Food Category"
            height={50}
            width={200}
            className="mb-4"
          />
          <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold whitespace-pre-wrap text-center">
            <span className="text-primarycolororg">Ch</span>ose Food Item
          </h1>
        </div>

        {/* Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Image
            src="/images/Foodcategory/Img (1).png"
            alt="Img1"
            height={328}
            width={305}
            className="rounded-lg w-full"
          />
          <Image
            src="/images/Foodcategory/Img (2).png"
            alt="Img2"
            height={328}
            width={305}
            className="rounded-lg w-full"
          />
          <Image
            src="/images/Foodcategory/Img (3).png"
            alt="Img3"
            height={328}
            width={305}
            className="rounded-lg w-full"
          />
          <Image
            src="/images/Foodcategory/Img (4).png"
            alt="Img4"
            height={328}
            width={305}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
