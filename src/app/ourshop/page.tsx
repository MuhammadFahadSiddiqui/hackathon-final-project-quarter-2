import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import FreshLime1 from "../../../public/images/Ourshop/Fresh Lime.png";
import FreshLime2 from "../../../public/images/Ourshop/Fresh Lime-1.png";
import FreshLime3 from "../../../public/images/Ourshop/Fresh Lime-2.png";
import FreshLime4 from "../../../public/images/Ourshop/Fresh Lime-3.png";
import FreshLime5 from "../../../public/images/Ourshop/Fresh Lime-4.png";
import FreshLime6 from "../../../public/images/Ourshop/Fresh Lime-5.png";
import FreshLime7 from "../../../public/images/Ourshop/Fresh Lime-6.png";
import FreshLime8 from "../../../public/images/Ourshop/Fresh Lime-7.png";
import FreshLime9 from "../../../public/images/Ourshop/Fresh Lime-8.png";
import FreshLime10 from "../../../public/images/Ourshop/Fresh Lime-9.png";
import FreshLime11 from "../../../public/images/Ourshop/Fresh Lime-10.png";
import FreshLime12 from "../../../public/images/Ourshop/Fresh Lime-11.png";
import FreshLime13 from "../../../public/images/Ourshop/Fresh Lime-12.png";
import FreshLime14 from "../../../public/images/Ourshop/Fresh Lime-13.png";
import FreshLime15 from "../../../public/images/Ourshop/Fresh Lime-14.png";
import Banner from "../../../public/images/Ourshop/Banner.png";
import Line from "../../../public/images/Ourshop/line.png";

const images = [
  FreshLime1,
  FreshLime2,
  FreshLime3,
  FreshLime4,
  FreshLime5,
  FreshLime6,
  FreshLime7,
  FreshLime8,
  FreshLime9,
  FreshLime10,
  FreshLime11,
  FreshLime12,
  FreshLime13,
  FreshLime14,
  FreshLime15,
];

export default function Page() {
  return (
    <div className="flex flex-col justify-center w-[1920px]">
      <div>
        <div className="flex items-center h-[90px] bg-ododod text-ffffff gap-80 justify-center">
          <p className="text-[32px] font-bold">
            Food
            <span className="text-primarycolororg cursor-pointer">truck</span>
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
        <div className="-mt-72 ">
          <p className="flex justify-center text-ffffff text-[65px] font-bold">
            Our Shop
          </p>
          <div className="flex justify-center mt-3 text-[20px]">
            <p className="text-ffffff">Home</p>
            <Image
              alt="CaretRight"
              src="/images/SendonderyNevBar/CaretRight.png"
              width={16}
              height={16}
            />
            <p className="text-primarycolororg">shop </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-60 mh-[1923px] w-[1320px]">
        <div>
          {/* Dropdown Section */}
          <div className="flex gap-10 mb-6">
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold">Sort by:</p>
              <div className="flex items-center w-56 h-12 border-2 border-gray-400 rounded-lg px-3">
                <p className="text-gray-600">Newest</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold">Show:</p>
              <div className="flex items-center w-56 h-12 border-2 border-gray-400 rounded-lg px-3">
                <p className="text-gray-600">Default</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-[1923px] w-[984px] gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative w-[313px] h-[330px]">
                <Image
                  src={image}
                  alt={`Fresh Lime ${index + 1}`}
                  width={312}
                  height={330}
                />
              </div>
            ))}
          </div>
        </div>
        {/* side colum */}
        <div className="h-[1489px] w-[313px]">
          <div className="w[313px] mt-[70px]">
            <div className="flex items-center border border-gray-300 overflow-hidden w-80">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
              />
              {/* Icon Container */}
              <div className="bg-primarycolororg p-2 px-3 flex items-center justify-center">
                <FaSearch className="text-secondarycolorwhite text-lg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col h[372px] w-[248px]">
            <h1 className="text-[24px] text-gray1 font-bold mt-4">Category</h1>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Sandwiches</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Burger</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Chicken Chup</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Drink</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Pizza</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Thi</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Non Veg</p>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="size-[20px] mr-3" />
              <p className="text-[24px] text-gray1">Uncategorized</p>
            </div>
            <Image
              className="mt-5"
              src={Banner}
              alt="banner"
              width={248}
              height={286}
            />
            <h1 className="text-[24px] text-gray1 font-bold mt-4">
              Filter By Price
            </h1>
            <Image
              className="mt-5"
              src={Line}
              alt="banner"
              width={280}
              height={20}
            />
            <div className="flex justify-between">
              <p className="text-ododod text-[16px]">From $0 to $8000</p>
              <p className="text-ododod text-[16px]">Filter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
