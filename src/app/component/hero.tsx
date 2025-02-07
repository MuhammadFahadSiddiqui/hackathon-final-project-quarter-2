import React from "react";
import Image from "next/image";
import sidestrip from "../../../public/images/Hero/Hero side strip.png";

function Hero() {
  return (
    <div>
      <div className="bg-ododod">
        <section className="flex flex-col-reverse md:flex-row justify-evenly items-center bg-cover bg-center hero-bg-img px-[10%] py-10">
          {/* Heading */}
          <div className="flex-1 flex items-center gap-4 md:gap-6 lg:gap-8">
            <Image
              src={sidestrip}
              alt="side strip"
              height={492}
              width={24}
              className="hidden md:block"
            />
            <div className="text-white flex flex-col items-start">
              <Image
                className="h-auto w-auto max-w-[200px] md:max-w-[249px]"
                src="/images/Hero/Its Quick & Amusing!.png"
                alt="It's Quick & Amusing!"
                height={40}
                width={249}
              />
              <h1 className="text-[20px] sm:text-[25px] md:text-[40px] lg:text-[50px] font-bold mt-4">
                <span className="text-primarycolororg">Th</span>e Art of Speed
                Food Quality
              </h1>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue.
              </p>
              <button className="bg-primarycolororg text-white w-[120px] h-[40px] sm:w-[140px] sm:h-[50px] md:w-[190px] md:h-[60px] rounded-[40px] mt-4 hover:bg-yellow-800">
                See More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center lg:mt-20 md:mt-0">
            <Image
              src="/images/Hero/Hero plate.png"
              alt="Hero Image"
              height={500}
              width={500}
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
