import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Banner from "../component/banner";

function Signin() {
  return (
    <div>
{/* Full Width Banner */}
<Banner heading="Sign in" breadcrumb="Sign in" />
      {/* sign up 404 */}

      <div className="mx-auto my-10 h-[564px] w-[424px] p-6 mb-10 bg-white shadow-lg rounded-md">
        <h3 className="text-[20px] font-semibold text-center mb-6">Sign In</h3>

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

        {/* Sign In Button */}
        <button className="w-full bg-primarycolororg text-white py-2 rounded-md transition">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center justify-between my-6">
          <div className="w-32 h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 text-sm">OR</p>
          <div className="w-32 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Sign In */}
        <div className="flex items-center border border-gray-300 p-2 justify-center mb-4 space-x-2">
          <FcGoogle className="text-xl" />
          <p className="text-sm">Sign in with Google</p>
        </div>

        {/* Apple Sign In */}
        <div className="flex items-center border border-gray-300 p-2 justify-center space-x-2">
          <FaApple className="text-xl" />
          <p className="text-sm">Sign in with Apple</p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
