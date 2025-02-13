import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import Link from "next/link";
import Banner from "../component/banner";

function signup() {
  return (
    <div className="mb-40">
{/* Full Width Banner */}
<Banner heading="Sign up" breadcrumb="Sign up" />
      {/* sign up 404 */}

      <div className="mx-auto my-10 h-[564px] w-[424px] p-6 bg-white shadow-lg rounded-md">
        <h3 className="text-[20px] font-semibold text-center mb-6">Sign Up</h3>

        {/* NAme Input */}
        <div className="mb-4 relative">
          <LuUserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            id="name"
            type="name"
            placeholder="Enter your name"
            className="w-full border rounded-md p-2 pl-10 mt-1 focus:ring-2 focus:ring-primarycolororg"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4 relative">
          <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-md p-2 pl-10 mt-1 focus:ring-2 focus:ring-primarycolororg"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-md p-2 pl-10 mt-1 focus:ring-2 focus:ring-primarycolororg"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <p>Remember me?</p>
          </label>
          <a href="#" className="text-primarycolororg text-sm hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Sign Un Button */}
        <button className="w-full bg-primarycolororg text-white py-2 rounded-md hover:bg-blue-600 transition">
          Sign Up
        </button>

        {/* Sign In Button */}
        <Link href="/signin">
          <button className="w-full text-primarycolororg bg-secondarycolorwhite border border-gray-300 py-2 rounded-md hover:bg-blue-600 transition mt-3">
            Sign In
          </button>
        </Link>

        {/* Divider */}
        <div className="flex items-center justify-between my-6">
          <div className="w-32 h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 text-sm">OR</p>
          <div className="w-32 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Sign In */}
        <Link href="/signin">
          <div className="flex items-center border border-gray-300 p-2 justify-center mb-4 space-x-2">
            <FcGoogle className="text-xl" />
            <p className="text-sm">Sign in with Google</p>
          </div>
        </Link>

        {/* Apple Sign In */}
        <div className="flex items-center border border-gray-300 p-2 justify-center space-x-2">
          <FaApple className="text-xl" />
          <p className="text-sm">Sign in with Apple</p>
        </div>
      </div>
    </div>
  );
}

export default signup;
