import React from 'react'
import Image from 'next/image'

function FAQPage() {
    return (
        <div>
            {/* Navbar */}
            <div>
                <div className="flex items-center h-[90px] bg-ododod text-ffffff gap-80 justify-center">
                    <p className="text-[32px] font-bold">
                        Food<span className="text-primarycolororg cursor-pointer">truck</span>
                    </p>
                    <div className="flex text-[16px] gap-5 cursor-pointer">
                        <p className="text-primarycolororg">Home</p>
                        <p className="text-ffffff">Menu</p>
                        <p className="text-ffffff">Blog</p>
                        <p className="text-ffffff">Pages</p>
                        <p className="text-ffffff">About</p>
                        <p className="text-ffffff">Shop</p>
                        <p className="text-ffffff">Contact</p>
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
                    <p className="flex justify-center text-ffffff text-[65px] font-bold">FAQ Page</p>
                    <div className="flex justify-center mt-3 text-[20px]">
                        <p className="text-ffffff">Home</p>
                        <Image
                            alt="CaretRight"
                            src="/images/SendonderyNevBar/CaretRight.png"
                            width={16}
                            height={16}
                        />
                        <p className="text-primarycolororg">Faq </p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-52'>
                <h2 className='text-4xl font-semibold'>Questions Looks Here</h2>
                <p className='text-[16px] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

                {/* FAQ Section */}

                <div className='flex gap-6 mx-72 text-left mt-10'>
                    <div >
                        {[
                            "How we serve food?",
                            "How can we get and touch with you?",
                            "How is our food quality?",
                        ].map((question, index) => (
                            <div key={index} className="flex bg-[#faf7f2] flex-col mb-4">
                                <div className="flex justify-between items-center p-4">
                                    <h4 className='font-bold text-xl'>{question}</h4>
                                    <span>+</span> {/* Displaying "+" icon */}
                                </div>
                                <p className="px-4 pb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                                </p>
                            </div>
                        ))}
                    </div>

                    <div>
                        {[
                            "What will be food delivered? and when?",
                            "How do we give home delivery?",
                            "In this restaurant 24 hour open?",
                        ].map((question, index) => (
                            <div key={index} className="flex bg-[#faf7f2] flex-col mb-4">
                                <div className="flex justify-between items-center p-4">
                                    <h4 className='font-bold text-xl'>{question}</h4>
                                    <span>+</span> {/* Displaying "+" icon */}
                                </div>
                                <p className="px-4 pb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQPage