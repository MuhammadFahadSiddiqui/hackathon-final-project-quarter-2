"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../component/banner";

// RootState کی ٹائپ کو شامل کریں
import { RootState } from "../../redux/store"; // اپنی store فائل کے مطابق ایڈجسٹ کریں

// CartItem کی ساخت بتائیں
interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export default function Checkout() {
  // useSelector کو RootState کی ٹائپ کے ساتھ استعمال کریں
  const { cartItems = [] }: { cartItems: CartItem[] } = useSelector(
    (state: RootState) => state.cart
  );

  // Reduce function میں a اور c کی ٹائپنگ
  const itemsPrice = cartItems.reduce(
    (a: number, c: CartItem) => a + c.price * c.qty,
    0
  );

  // Shipping address state
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const [orderStatus, setOrderStatus] = useState(""); // Order status message for popup

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simply show the success message (popup) when button is clicked
    setOrderStatus("Order placed successfully!");
  };

  return (
    <div>
      <Banner heading="Checkout Page" breadcrumb="Checkout Page" />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-primarycolororg text-2xl font-bold">Shipping Address</h1>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={shippingAddress.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={shippingAddress.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={shippingAddress.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingAddress.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <select
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option>Choose country</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <select
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option>Choose city</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                    <option>Lahore</option>
                    <option>Hyderabad</option>
                    <option>Multan</option>
                    <option>Faisalabad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Zip code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingAddress.zipCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Address 1</label>
                  <input
                    type="text"
                    name="address1"
                    value={shippingAddress.address1}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primarycolororg text-white py-3 rounded-md hover:scale-105"
              >
                Place an order →
              </button>
            </form>
          </div>

          {/* Order Summary with Cart Items */}
          <div className="p-6 border-t">
            <h2 className="text-primarycolororg text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.qty).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${itemsPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {orderStatus && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <p>{orderStatus}</p>
            <a href="/">
              <button className="mt-4 bg-primarycolororg text-white py-2 px-6 rounded-md">
                Close
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
