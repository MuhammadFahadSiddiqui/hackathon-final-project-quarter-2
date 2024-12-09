import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon

export default function Navbar() {
  return (
    <div className="flex justify-center mt-12">
      <div>
        <p className="flex justify-center text-[32px] font-bold text-ffffff">
          Food<span className="text-primarycolororg cursor-pointer">truck</span>
        </p>
        <div className="flex items-center justify-between w-[1320px] h-[87px]">
          <div className="flex text-[16px] gap-5">
            <Link href='/'>
            <p className="text-ffffff hover:cursor-pointer">Home</p>
            </Link>
           <Link href='/ourmenu'> <p className="text-ffffff hover:cursor-pointer">Menu</p></Link>
            {/* <Link href='/'><p className="text-ffffff hover:cursor-pointer">Blog</p></Link> */}
            <Link href='/menu'><p className="text-ffffff hover:cursor-pointer">Pages</p></Link>
            <Link href='/about'><p className="text-ffffff hover:cursor-pointer">About</p></Link>
            <Link href='/shop'><p className="text-ffffff hover:cursor-pointer">Shop</p></Link>
            <Link href='/contact'><p className="text-ffffff hover:cursor-pointer">Contact</p></Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center gap-8 h-[54px] w-[310px] border rounded-full border-primarycolororg">
              <input
                className="bg-transparent text-secondarycolorwhite px-4 py-2 focus:outline-none"
                placeholder="Search"
              />
              <IoSearch style={{ color: "white", fontSize: "24px" }} />
            </div>
            <PiHandbagBold style={{ color: "white", fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
