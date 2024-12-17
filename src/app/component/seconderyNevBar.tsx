import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function SeconderyNevBar() {
  return (
    <div>
      <div className="flex items-center h-[90px] bg-ododod text-ffffff gap-80 justify-center">
        <p className="text-[32px] font-bold">
          Food<span className="text-primarycolororg cursor-pointer">truck</span>
        </p>
        <div className="flex text-[16px] gap-5">
            <Link href="/">
              <p className="text-ffffff hover:cursor-pointer">Home</p>
            </Link>
            <Link href="/ourmenu">
              <p className="text-ffffff hover:cursor-pointer">Menu</p>
            </Link>
            {/* <Link href='/'><p className="text-ffffff hover:cursor-pointer">Blog</p></Link> */}
            <Link href="/checkout">
              <p className="text-ffffff hover:cursor-pointer">Pages</p>
            </Link>
            <Link href="/ourchef">
              <p className="text-ffffff hover:cursor-pointer">Chef</p>
            </Link>
            <Link href="/ourshop">
              <p className="text-ffffff hover:cursor-pointer">Shop</p>
            </Link>
            <Link href="/contact">
              <p className="text-ffffff hover:cursor-pointer">Contact</p>
            </Link>
            <Link href="/signup">
              <p className="text-ffffff hover:cursor-pointer">Sign Up</p>
            </Link>
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