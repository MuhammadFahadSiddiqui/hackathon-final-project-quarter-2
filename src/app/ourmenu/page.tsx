import React from "react";
import SeconderyNevBar from "../component/seconderyNevBar";
import Image from "next/image";
import Img1 from "../../../public/images/Our Menu/Img1.png";
import Img2 from "../../../public/images/Our Menu/Img2.png";
import Img3 from "../../../public/images/Our Menu/Img3.png";
import Img4 from "../../../public/images/Our Menu/Img4.png";
import Coffee from "../../../public/images/Our Menu/Coffee.png";

export default function page() {
  return (
    <div className="mx-auto">
      <SeconderyNevBar />
      {/* menu sec 1 */}
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
      {/* menu sec 2 */}
      <div className="flex justify-center">
        <div className="flex justify-between mt-48 w-[1320px] h-[628px]">
          <div className="flex flex-col w-[760px] h-[628px] ">
            <div>
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-[48px] font-bold">Main Course</h1>
            </div>
            <div>
              <div className="flex justify-between items-center mt-5">
                <div className="mt-10">
                  <h1 className="text-[24px] font-bold">
                  Optic Big Breakfast Combo Menu
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
                  <h1 className="text-[24px] font-bold">
                    Cashew Chicken With Stir-Fry
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
                  Vegetables & Green Salad
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
          <Image
            src={Img2}
            alt="Alder Grilled Chinook Salmon"
            height={626}
            width={448}
          />
        </div>
      </div>
      {/* menu sec 3 */}
      <div className="flex justify-center">
        <div className="flex justify-between mt-48 w-[1320px] h-[628px]">
          <Image
            src={Img3}
            alt="Alder Grilled Chinook Salmon"
            height={626}
            width={448}
          />
          <div className="flex flex-col w-[760px] h-[628px] ">
            <div>
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-[48px] font-bold">Dessert</h1>
            </div>
            <div>
              <div className="flex justify-between items-center mt-5">
                <div className="mt-10">
                  <h1 className="text-[24px] font-bold">
                  Fig and lemon cake
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
                  <h1 className="text-[24px] font-bold">
                  Creamy mascarpone cake
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
                  Pastry, blueberries, lemon juice
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
                  Pain au chocolat
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
      {/* menu sec 4 */}
      <div className="flex justify-center">
        <div className="flex justify-between mt-48 w-[1320px] h-[628px]">
          <div className="flex flex-col w-[760px] h-[628px] ">
            <div>
              <Image src={Coffee} alt="Coffee" height={24} width={24} />
              <h1 className="text-[48px] font-bold">Drinks</h1>
            </div>
            <div>
              <div className="flex justify-between items-center mt-5">
                <div className="mt-10">
                  <h1 className="text-[24px] font-bold">
                  Caffè macchiato
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
                  <h1 className="text-[24px] font-bold">
                  Aperol Spritz Capacianno
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
                  Caffe Latte Campuri
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
                  Tormentoso BushTea Pintoage
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
          <Image
            src={Img4}
            alt="Alder Grilled Chinook Salmon"
            height={626}
            width={448}
          />
        </div>
      </div>
    </div>
  );
}
