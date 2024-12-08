import React from "react";
import Image from "next/image";
import sidestrip from "../../../public/images/Hero/Hero side strip.png";
import Navbar from "./navbar";

function Hero() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-ododod">
        <section className="bg-cover bg-center hero-bg-img px-3 -mt-[180px] md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px] lg:h-[950px] lg:w-[1920px]">
          {/* Heading */}
          <div className="flex items-center -mt-[28px] gap-[34px]">
            <Image src={sidestrip} alt="side strip" height={492} width={24} />
            <div className="text-white w-[472px] h-[356px] mt-14">
              <Image
                src="/images/Hero/Its Quick & Amusing!.png"
                alt="It's Quick & Amusing!"
                height={40}
                width={249}
              />

              <h1 className="text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
                <span className="text-primarycolororg">Th</span>e Art of Speed
                Food Quality
              </h1>

              <p className="text-[10px] md:text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue.
              </p>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <button className="bg-primarycolororg text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:mt-20 md:mt-0">
            <Image
              src="/images/Hero/Hero plate.png"
              alt="Hero Image"
              height={670}
              width={878}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
