import React from "react";
import Image from "next/image";
import Img1 from "../../../public/images/Our Menu/Img1.png";
import Coffee from "../../../public/images/Our Menu/Coffee.png";

export default function Menucompt() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between mt-48 w-[1320px] h-[628px]">
        <Image
          src={Img1}
          alt="Alder Grilled Chinook Salmon"
          height={626}
          width={448}
        />
        <div className="flex flex-col w-[760px] h-[628px] ">
          <div>
            <Image src={Coffee} alt="Coffee" height={24} width={24} />
            <h1 className="text-[48px] font-bold">Starter Menu</h1>
          </div>
          <div>
            <div className="flex justify-between items-center mt-5">
              <div className="mt-10">
                <h1 className="text-[24px] font-bold">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-[16px]">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-[16px]">560 CAL</p>
              </div>
              <p className="text-[24px] font-bold text-primarycolororg">
                32$
              </p>
            </div>
            <div className="flex justify-between items-center">
            <div className="mt-10">
              <h1 className="text-[24px] font-bold text-primarycolororg">
                Berries and creme tart
              </h1>
              <p className="text-[16px]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[16px]">700 CAL</p>
            </div>
            <p className="text-[24px] font-bold text-primarycolororg">
                43$
              </p>
            </div>
            <div className="flex justify-between items-center">
            <div className="mt-10">
              <h1 className="text-[24px] font-bold">
                Tormentoso Bush Pizza Pintoage
              </h1>
              <p className="text-[16px]">Tormentoso Bush Pizza Pintoage</p>
              <p className="text-[16px]">1000 CAL</p>
            </div>
            <p className="text-[24px] font-bold text-primarycolororg">
                14$
              </p>
            </div>
            <div className="flex justify-between items-center">
            <div className="mt-10">
              <h1 className="text-[24px] font-bold">
                Spicy Vegan Potato Curry
              </h1>
              <p className="text-[16px]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[16px]">560 CAL</p>
            </div>
            <p className="text-[24px] font-bold text-primarycolororg">
                32$
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
