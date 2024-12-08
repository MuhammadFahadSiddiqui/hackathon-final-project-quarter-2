import React from "react";
import Image from "next/image";

export default function SeconderyNevBar() {
  return (
    <div>
      <div className="flex items-center h-[90px] bg-ododod text-ffffff gap-80 justify-center">
        <p className="text-[32px] font-bold">
          Food<span className="text-primarycolororg cursor-pointer">truck</span>
        </p>
        <div className="flex text-[16px] gap-5 cursor-pointer">
          <p className="text-primarycolororg">Home</p>
          <p className="text-ffffff">Menu</p>
          <p className="text-ffffff">Blog</p>
          <p className="text-ffffff">Pages</p>
          <p className="text-ffffff">About</p>
          <p className="text-ffffff">Shop</p>
          <p className="text-ffffff">Contact</p>
        </div>
        <div className="flex gap-[24px] cursor-pointer">
          <Image
            alt="glss"
            src="/images/SendonderyNevBar/MagnifyingGlass.png"
            width={24}
            height={24}
          />
          <Image
            alt="User"
            src="/images/SendonderyNevBar/User.png"
            width={24}
            height={24}
          />
          <Image
            alt="Tote"
            src="/images/SendonderyNevBar/Tote.png"
            width={24}
            height={24}
          />
        </div>
      </div>
      <Image
        alt="Veg"
        src="/images/SendonderyNevBar/SendonderyNevBar.png"
        width={1920}
        height={410}
      />
      <div className="-mt-72">
        <p className="flex justify-center text-ffffff text-[65px] font-bold">Our Menu</p>
        <div className="flex justify-center mt-3 text-[20px]">
          <p className="text-ffffff">Home</p>
          <Image
            alt="CaretRight"
            src="/images/SendonderyNevBar/CaretRight.png"
            width={16}
            height={16}
          />
          <p className="text-primarycolororg">Menu</p>
        </div>
      </div>
    </div>
  );
}