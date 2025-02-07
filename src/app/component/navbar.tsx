"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:px-20 items-center py-6 h-[90px] bg-ododod text-white justify-between">
        <p className="text-[32px] font-bold">
          Food<span className="text-primarycolororg cursor-pointer">truck</span>
        </p>
        <ul className="flex text-[16px] gap-6">
          <Link href="/">
            <li className="hover:text-primarycolororg cursor-pointer">Home</li>
          </Link>
          <Link href="/ourmenu">
            <li className="hover:text-primarycolororg cursor-pointer">Menu</li>
          </Link>
          <Link href="/ourchef">
            <li className="hover:text-primarycolororg cursor-pointer">Chef</li>
          </Link>
          <Link href="/ourshop">
            <li className="hover:text-primarycolororg cursor-pointer">Shop</li>
          </Link>
          <Link href="/blog">
            <li className="hover:text-primarycolororg cursor-pointer">
              Blog
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:text-primarycolororg cursor-pointer">About</li>
          </Link>
        </ul>
        <div className="flex gap-4 text-white text-2xl">
          <GoHeart className="hover:text-primarycolororg cursor-pointer" />
          <IoBagHandleOutline className="hover:text-primarycolororg cursor-pointer" />
          <AiOutlineUser className="hover:text-primarycolororg cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden bg-ododod text-white py-4 px-5 flex justify-between items-center">
        <GiHamburgerMenu
          size={30}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        />
        <div className="flex gap-4 text-white text-2xl mt-4">
          <GoHeart className="hover:text-primarycolororg cursor-pointer" />
          <IoBagHandleOutline className="hover:text-primarycolororg cursor-pointer" />
          <AiOutlineUser className="hover:text-primarycolororg cursor-pointer" />
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-ododod text-white py-4 px-5">
          <ul className="flex flex-col gap-4">
            <Link href="/">
              <li className="hover:text-primarycolororg cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/ourmenu">
              <li className="hover:text-primarycolororg cursor-pointer">
                Menu
              </li>
            </Link>
            <Link href="/ourchef">
              <li className="hover:text-primarycolororg cursor-pointer">
                Chef
              </li>
            </Link>
            <Link href="/ourshop">
              <li className="hover:text-primarycolororg cursor-pointer">
                Shop
              </li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-primarycolororg cursor-pointer">
                Blog
              </li>
            </Link>
            <Link href="/about">
              <li className="hover:text-primarycolororg cursor-pointer">
                About
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
