import React from "react";
import Image from "next/image";
import Img1 from "../../../public/images/Our Menu/Img1.png";
import Img2 from "../../../public/images/Our Menu/Img2.png";
import Img3 from "../../../public/images/Our Menu/Img3.png";
import Img4 from "../../../public/images/Our Menu/Img4.png";
import Coffee from "../../../public/images/Our Menu/Coffee.png";
import Banner from "../component/banner";

export default function Page() {
  return (
    <div>
      {/* Navbar Full Width */}
      <Banner heading="Our Menu" breadcrumb="Menu" />

      {/* Content Wrapper with 80% width */}
      <div className="mx-auto max-w-[80%]">
        {/* menu sec 1 */}
        <div className="flex flex-col md:flex-row justify-center mt-20 sm:gap-5">
          <Image
            src={Img1}
            alt="Alder Grilled Chinook Salmon"
            height={626}
            width={448}
            className="w-full lg:w-1/3"
          />
          <div className="flex flex-col w-full lg:w-2/3 md:pl-10">
            <div className="mb-6">
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-3xl lg:text-4xl font-bold">Starter Menu</h1>
            </div>
            {[...Array(4)].map((_, index) => (
              <div className="flex justify-between items-start mt-10" key={index}>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Dish Name {index + 1}
                  </h1>
                  <p className="text-sm lg:text-base">
                    Description of the dish goes here.
                  </p>
                  <p className="text-sm lg:text-base">560 CAL</p>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-primarycolororg">
                  $32
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Repeat Other Sections (menu sec 2, menu sec 3, menu sec 4) */}
        {/* menu sec 2 */}
        <div className="flex flex-col-reverse md:flex-row justify-center mt-20 sm:gap-5">
          <div className="flex flex-col w-full lg:w-2/3 md:pr-10">
            <div className="mb-6">
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-3xl lg:text-4xl font-bold">Main Course</h1>
            </div>
            {[...Array(4)].map((_, index) => (
              <div className="flex justify-between items-start mt-10" key={index}>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Dish Name {index + 5}
                  </h1>
                  <p className="text-sm lg:text-base">
                    Description of the dish goes here.
                  </p>
                  <p className="text-sm lg:text-base">560 CAL</p>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-primarycolororg">
                  $43
                </p>
              </div>
            ))}
          </div>
          <Image
            src={Img2}
            alt="Main Course Image"
            height={626}
            width={448}
            className="w-full lg:w-1/3"
          />
        </div>

        {/* Repeat for menu sec 3 and menu sec 4 */}
        {/* menu sec 3 */}
        <div className="flex flex-col md:flex-row justify-center mt-20 sm:gap-5">
          <Image
            src={Img3}
            alt="Dessert Image"
            height={626}
            width={448}
            className="w-full lg:w-1/3"
          />
          <div className="flex flex-col w-full lg:w-2/3 md:pl-10">
            <div className="mb-6">
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-3xl lg:text-4xl font-bold">Dessert</h1>
            </div>
            {[...Array(4)].map((_, index) => (
              <div className="flex justify-between items-start mt-10" key={index}>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Dish Name {index + 9}
                  </h1>
                  <p className="text-sm lg:text-base">
                    Description of the dish goes here.
                  </p>
                  <p className="text-sm lg:text-base">700 CAL</p>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-primarycolororg">
                  $14
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* menu sec 4 */}
        <div className="flex flex-col-reverse md:flex-row justify-center mt-20 mb-20 sm:gap-5">
          <div className="flex flex-col w-full lg:w-2/3 md:pr-10">
            <div className="mb-6">
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-3xl lg:text-4xl font-bold">Drinks</h1>
            </div>
            {[...Array(4)].map((_, index) => (
              <div className="flex justify-between items-start mt-10" key={index}>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Drink Name {index + 13}
                  </h1>
                  <p className="text-sm lg:text-base">
                    Description of the drink goes here.
                  </p>
                  <p className="text-sm lg:text-base">560 CAL</p>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-primarycolororg">
                  $32
                </p>
              </div>
            ))}
          </div>
          <Image
            src={Img4}
            alt="Drinks Image"
            height={626}
            width={448}
            className="w-full lg:w-1/3"
          />
        </div>
      </div>
    </div>
  );
}
