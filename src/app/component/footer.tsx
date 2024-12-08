"use client";

import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-secondarycolorwhite">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-black px-3 md:px-[135px] py-8">
        <div className="text-secondarycolorwhite text-center md:text-left md:w-[50%] w-full">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-primarycolororg">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-4">
            Don&#39;t wait; make a smart & logical quote here. It&#39;s pretty easy.
          </p>
        </div>
        <div className="flex md:mt-0 mt-4 justify-center md:justify-start w-full">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-primarycolororg text-secondarycolorwhite py-2 px-3 md:py-[10px] md:px-[20px] mr-2 w-[80%] md:w-auto"
          />
          <button className="text-primarycolororg bg-secondarycolorsecondarycolorwhite py-2 px-4 md:py-[10px] md:px-[20px]">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-primarycolororg" />

      {/* Content Sections */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div className="text-left">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">About Us</h2>
            <p className="text-[#FFFFFF] text-[16px] font-normal mb-6 hover:underline">
              Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-primarycolororg flex justify-center items-center w-[72px] h-[72px]">
                <PiClockClockwiseBold className="text-secondarycolorwhite text-[40px]" />
              </div>
              <div>
                <h3 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h3>
                <p className="text-[10px] text-[#FFFFFF]">Mon - Sat (8:00 - 18:00)</p>
                <p className="text-[10px] text-[#FFFFFF]">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-left">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Useful Links</h2>
            <ul className="text-gray-500 font-medium">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
                <li key={link} className="mb-4">
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="text-left">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Help?</h2>
            <ul className="text-gray-500 font-medium">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map(
                (help) => (
                  <li key={help} className="mb-4">
                    <a href="#" className="hover:underline">
                      {help}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="text-left flex flex-col">
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Recent Posts</h2>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={`flex justify-center gap-4 ${index !== 0 ? "mt-4" : ""}`}>
                <Image
                  src="/images/Nevbar/Img1.png"
                  alt="Food"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-[12px] text-[#FFFFFF] font-normal">20 Feb 2022</h3>
                  <p className="text-[14px] font-normal text-[#FFFFFF]">Keep Your Business</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full px-4 py-3 bg-gray2 flex flex-col items-center justify-between md:flex-row">
          <span className="text-sm text-black sm:text-center mb-4 md:mb-0">
          Copyright © 2022 by Ayeman. All Rights Reserved.
          </span>
          <div className="flex justify-center gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
              <div
                key={index}
                className="bg-secondarycolorwhite w-9 h-9 flex justify-center items-center rounded text-black hover:bg-primarycolororg hover:text-secondarycolorwhite transition-colors"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;