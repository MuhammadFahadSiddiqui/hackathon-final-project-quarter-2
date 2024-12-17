import React from "react";
import Image from "next/image";
import Link from "next/link";
// Array of chefs with relative image paths
const chefs = [
  { name: "Tahmina Rumi", role: "Chef", imgSrc: "/images/OurChef/1.png" },
  { name: "Jorina Begum", role: "Chef", imgSrc: "/images/OurChef/2.png" },
  { name: "M.Mohammad", role: "Chef", imgSrc: "/images/OurChef/3.png" },
  { name: "Munna Kathy", role: "Chef", imgSrc: "/images/OurChef/4.png" },
  { name: "Tahmina Rumi", role: "Chef", imgSrc: "/images/OurChef/5.png" },
  { name: "Bisnu Devgon", role: "Chef", imgSrc: "/images/OurChef/6.png" },
  { name: "Motin Molladsf", role: "Chef", imgSrc: "/images/OurChef/7.png" },
  { name: "William Rumi", role: "Chef", imgSrc: "/images/OurChef/8.png" },
  { name: "Kets William Roy", role: "Chef", imgSrc: "/images/OurChef/9.png" },
  { name: "Mahmud Kholil", role: "Chef", imgSrc: "/images/OurChef/10.png" },
  { name: "Ataur Rahman", role: "Chef", imgSrc: "/images/OurChef/11.png" },
  { name: "Ataur Rahman", role: "Chef", imgSrc: "/images/OurChef/12.png" },
];

function OurChef() {
  return (
    <div>
      {/* Navbar */}
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
              {" "}
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
          alt="Banner"
          src="/images/SendonderyNevBar/SendonderyNevBar.png"
          width={1920}
          height={410}
        />
        <div className="-mt-72 text-center">
          <p className="text-white text-[65px] font-bold">Our Chef</p>
          <div className="mt-3 text-[20px] text-white flex justify-center items-center gap-2">
            <p>Home</p>
            <Image
              alt="CaretRight"
              src="/images/SendonderyNevBar/CaretRight.png"
              width={16}
              height={16}
            />
            <p className="text-orange-500">Chef</p>
          </div>
        </div>
      </div>

      {/* Chefs Section */}
      <div className="mt-60 mx-auto max-w-[1320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div key={index} className="text-center">
            <Image
              alt={chef.name}
              src={chef.imgSrc}
              width={312}
              height={379}
              className="rounded-lg"
            />
            <h5 className="text-[24px] font-medium mt-4">{chef.name}</h5>
            <p className="text-[18px] text-gray-500">{chef.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurChef;
