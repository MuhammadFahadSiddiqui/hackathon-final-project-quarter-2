import React from "react";
import Image from "next/image";

export default function Foodcategory() {
  return (
    <div>
      <div className="bg-ododod flex justify-center flex-col md:flex-row py-8">
        {/* Main div container */}
        <div className="w-full md:w-[1320px] h-auto px-4">
          <div className="flex justify-center">
            <Image
              src="/images/Foodcategory/Food Category.png" // Corrected path
              alt="Food Category"
              height={50}
              width={200}
              className="mb-6"
            />
          </div>
          <h1 className="flex justify-center text-[32px] md:text-[48px] font-bold whitespace-pre-wrap text-white -mt-7">
            <span className="text-primarycolororg">Ch</span>ose Food Item
          </h1>

          <div className="flex flex-wrap justify-between gap-4 mt-12">
            <Image
              src="/images/Foodcategory/Img (1).png" // Corrected path
              alt="Img1"
              height={328}
              width={305}
            />
            <Image
              src="/images/Foodcategory/Img (2).png" // Corrected path
              alt="Img2"
              height={328}
              width={305}
            />
            <Image
              src="/images/Foodcategory/Img (3).png" // Corrected path
              alt="Img3"
              height={328}
              width={305}
            />
            <Image
              src="/images/Foodcategory/Img (4).png" // Corrected path
              alt="Img4"
              height={328}
              width={305}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end -mt-[400px]">
        <Image
          src="/images/Foodcategory/Leaf.png" // Corrected path
          alt="Leaf"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
}
