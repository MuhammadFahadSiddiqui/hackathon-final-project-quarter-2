import React from "react";
import Link from "next/link";
import Banner from "./component/banner";

function NotFound() {
  return (
    <div>
      {/* navbar  */}
      <Banner heading="404 Error" breadcrumb="404" />
      
      {/* 404 page */}

      <div className="text-center my-28 space-y-6">
        <h2 className="sm:text-[55px] md:text-[65px] font-bold text-primarycolororg">404</h2>
        <h3 className="sm:text-[20px] md:text-[25px] font-semibold">
          Oops! Looks like something went wrong
        </h3>
        <p className="sm:text-[15px] md:text-[18px] text-gray-600">
          Page cannot be found! We’ll have it figured out in no time. Meanwhile,
          check out these fresh ideas:
        </p>
        <Link href="/">
          <button className="font-bold mt-10 bg-primarycolororg text-white px-6 py-3 rounded-md hover:bg-primarycolororg-dark transition duration-300">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
