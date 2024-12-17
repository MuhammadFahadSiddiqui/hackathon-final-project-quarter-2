import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function CheckOut() {
    return (
        <div>
            {/* navbar  */}
            <div>
                <div className="flex items-center h-[90px] bg-ododod text-ffffff gap-80 justify-center">
                    <p className="text-[32px] font-bold">
                        Food<span className="text-primarycolororg cursor-pointer">truck</span>
                    </p>
                    <div className="flex text-[16px] gap-5">
            <Link href="/">
              <p className="text-ffffff hover:cursor-pointer">Home</p>
            </Link>
            <Link href="/ourmenu">
              <p className="text-ffffff hover:cursor-pointer">Menu</p>
            </Link>
            {/* <Link href='/'><p className="text-ffffff hover:cursor-pointer">Blog</p></Link> */}
            <Link href="/checkout">
              <p className="text-ffffff hover:cursor-pointer">Pages</p>
            </Link>
            <Link href="/ourchef">
              <p className="text-ffffff hover:cursor-pointer">Chef</p>
            </Link>
            <Link href="/ourshop">
              <p className="text-ffffff hover:cursor-pointer">Shop</p>
            </Link>
            <Link href="/contact">
              <p className="text-ffffff hover:cursor-pointer">Contact</p>
            </Link>
            <Link href="/signup">
              <p className="text-ffffff hover:cursor-pointer">Sign Up</p>
            </Link>
          </div>
                    <div className="flex gap-[24px] cursor-pointer">
                        <Image
                            alt="glss"
                            src="/images/SendonderyNevBar/MagnifyingGlass.png"
                            width={24}
                            height={24}
                        />
                        <Image
                            alt="User"
                            src="/images/SendonderyNevBar/User.png"
                            width={24}
                            height={24}
                        />
                        <Image
                            alt="Tote"
                            src="/images/SendonderyNevBar/Tote.png"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
                <Image
                    alt="Veg"
                    src="/images/SendonderyNevBar/SendonderyNevBar.png"
                    width={1920}
                    height={410}
                />
                <div className="-mt-72">
                    <p className="flex justify-center text-ffffff text-[65px] font-bold">Checkout Page</p>
                    <div className="flex justify-center mt-3 text-[20px]">
                        <p className="text-ffffff">Home</p>
                        <Image
                            alt="CaretRight"
                            src="/images/SendonderyNevBar/CaretRight.png"
                            width={16}
                            height={16}
                        />
                        <p className="text-primarycolororg">Checkout </p>
                    </div>
                </div>
            </div>

            {/* Check Out Page */}
            <div className="p-8 mt-52">
            <div className="container mx-auto">
                {/* Shipping Address Section */}
                <h4 className=" text-2xl ml-72 mb-10 font-semibold flex">Shipping Address</h4>
                <div className='flex justify-center'>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className='w-[872]'>
                            <div className="flex gap-4 mb-4">
                                <div className="w-full">
                                    <label htmlFor="first-name" className="block mb-2">First Name</label>
                                    <input type="text" id="first-name" className="w-full border p-2" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="last-name" className="block mb-2">Last Name</label>
                                    <input type="text" id="last-name" className="w-full border p-2" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="w-full">
                                    <label htmlFor="email" className="block mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full border p-2" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="block mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full border p-2" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="w-full">
                                    <label htmlFor="company" className="block mb-2">Company</label>
                                    <input type="text" id="company" className="w-full border p-2" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="country" className="block mb-2">Country</label>
                                    <input type="text" id="country" className="w-full border p-2" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="w-full">
                                    <label htmlFor="city" className="block mb-2">City</label>
                                    <input type="text" id="city" className="w-full border p-2" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="zip-code" className="block mb-2">Zip Code</label>
                                    <input type="text" id="zip-code" className="w-full border p-2" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="w-full">
                                    <label htmlFor="address-1" className="block mb-2">Address 1</label>
                                    <input type="text" id="address-1" className="w-full border p-2" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="address-2" className="block mb-2">Address 2</label>
                                    <input type="text" id="address-2" className="w-full border p-2" />
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mt-8">Billing Address</h3>
                            <div className="flex items-center mt-2">
                                <input type="checkbox" id="same-as-shipping" className="mr-2" />
                                <label htmlFor="same-as-shipping" className="text-lg">Same as shipping address</label>
                            </div>
                            <div className="flex justify-between mt-8">
                                <div className="flex items-center gap-2">
                                    {/* <IoIosArrowBack /> */}
                                    <button className="flex bg-primarycolororg text-white px-6 py-2 rounded"><IoIosArrowBack className='mr-4' size={20}/>Back to cart</button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex bg-primarycolororg  text-white px-4 py-2 rounded">Proceed to shipping <IoIosArrowForward className='ml-4' size={20}/></button>
                                    {/* <IoIosArrowForward /> */}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Section */}
                        <div className="w-[424px] bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image alt="Tote" src="/images/SendonderyNevBar/Tote.png" width={50} height={50} />
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold">Chicken Tikka Kabab</h4>
                                    <p>150 gm net</p>
                                    <p className="text-gray-600">$503</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <Image alt="Tote" src="/images/SendonderyNevBar/Tote.png" width={50} height={50} />
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold">Chicken Tikka Kabab</h4>
                                    <p>150 gm net</p>
                                    <p className="text-gray-600">$503</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <Image alt="Tote" src="/images/SendonderyNevBar/Tote.png" width={50} height={50} />
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold">Chicken Tikka Kabab</h4>
                                    <p>150 gm net</p>
                                    <p className="text-gray-600">$503</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="flex justify-between mb-2">
                                    <p>Subtotal</p>
                                    <p>$1306</p>
                                </span>
                                <span className="flex justify-between mb-2">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </span>
                                <span className="flex justify-between mb-2">
                                    <p>Discount</p>
                                    <p>25%</p>
                                </span>
                                <span className="flex justify-between mb-2">
                                    <p>Tax</p>
                                    <p>$54.76</p>
                                </span>
                                <hr />
                                <span className="flex justify-between mt-2 font-semibold">
                                    <p>Total</p>
                                    <p>$432.65</p>
                                </span>
                            </div>
                            <div className="mt-8">
                                <button className="text-white bg-primarycolororg px-4 py-2 w-full rounded flex items-center justify-between">
                                    <span>Place an order</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default CheckOut