"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCart } from "../context/cartProvider";
import Banner from "../component/banner";

// ✅ Cart item کا صحیح TypeScript type define کریں
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

function CheckOut() {
  const { cart, removeFromCart } = useCart() as { cart: CartItem[]; removeFromCart: (id: string) => void };

  // 💰 حساب کتاب
  const subtotal: number = cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
  const discount: number = subtotal * 0.25; // 25% discount
  const tax: number = (subtotal - discount) * 0.1; // 10% tax
  const total: number = subtotal - discount + tax;

  return (
    <div>
      <Banner heading="Checkout Page" breadcrumb="Checkout Page" />

      <div className="p-8 my-20">
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* ✅ Shipping Address Section */}
            <div className="w-[872px]">
              <h4 className="text-2xl ml-10 mb-10 font-semibold">Shipping Address</h4>

              <div className="flex gap-4 mb-4">
                <input type="text" placeholder="First Name" className="w-full border p-2" />
                <input type="text" placeholder="Last Name" className="w-full border p-2" />
              </div>

              <div className="flex gap-4 mb-4">
                <input type="email" placeholder="Email Address" className="w-full border p-2" />
                <input type="tel" placeholder="Phone Number" className="w-full border p-2" />
              </div>

              <div className="flex justify-between mt-8">
                <button className="flex bg-primarycolororg text-white px-6 py-2 rounded">
                  <IoIosArrowBack className="mr-4" size={20} /> Back to Cart
                </button>
                <button className="flex bg-primarycolororg text-white px-4 py-2 rounded">
                  Proceed to Shipping <IoIosArrowForward className="ml-4" size={20} />
                </button>
              </div>
            </div>

            {/* ✅ Order Summary Section */}
            <div className="w-[424px] bg-gray-100 p-6 rounded-lg shadow-md">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item: CartItem) => (
                    <div key={item.id} className="flex items-center mb-4">
                      <Image src={item.imageUrl} alt={item.name} width={50} height={50} />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                        <p className="text-gray-600">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-auto">
                        ❌
                      </button>
                    </div>
                  ))}

                  <div className="mt-4">
                    <span className="flex justify-between mb-2">
                      <p>Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </span>
                    <span className="flex justify-between mb-2">
                      <p>Discount (25%)</p>
                      <p>-${discount.toFixed(2)}</p>
                    </span>
                    <span className="flex justify-between mb-2">
                      <p>Tax (10%)</p>
                      <p>${tax.toFixed(2)}</p>
                    </span>
                    <hr />
                    <span className="flex justify-between mt-2 font-semibold">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </span>
                  </div>

                  <div className="mt-8">
                    <button className="text-white bg-primarycolororg px-4 py-2 w-full rounded flex items-center justify-between">
                      <span>Place an Order</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
