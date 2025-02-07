import React from "react";
import Image from "next/image";
import Banner from "../component/banner";

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
      <Banner heading="Our Chef" breadcrumb="Chef" />
      {/* Chefs Section */}
      <div className="my-20 mx-auto max-w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div key={index} className="text-center">
            <Image
              alt={chef.name}
              src={chef.imgSrc}
              width={312}
              height={379}
              className="rounded-lg"
            />
            <h5 className="text-[22px] sm:text-[24px] font-medium mt-4">{chef.name}</h5>
            <p className="text-[16px] sm:text-[18px] text-gray-500">{chef.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurChef;
