// src/app/cart/page.tsx

"use client";

import { addToCart, removeFromCart } from "../../redux/slices/cardSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Banner from "../component/banner";
import { RootState } from "../../redux/type"; // Corrected path to import RootState

// Define types for CartItem (if not already defined in types.ts)
interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  countInStock: number;
  images?: string[];
}

function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  // Safe access to cart state with RootState type
  const { cartItems = [] } = useSelector((state: RootState) => state.cart);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = (product: CartItem, qty: number) => {
    dispatch(addToCart({ ...product, qty }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[400px] bg-gray-50 text-center">
        <div>
          <p className="text-xl font-semibold">Cart is empty.</p>
          <Link
            href="/products"
            className="text-primarycolororg hover:underline mt-4 block"
          >
            Go shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Banner heading="Shopping Cart" breadcrumb="Shopping Cart" />
      <div className="max-w-6xl mx-auto sm:my-10 md:my-20">
        <div className="text-3xl font-bold text-primarycolororg mb-6">
          Shopping Cart
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3 bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-orange-100 text-primarycolororg">
                <tr>
                  <th className="md:p-4 py-4 px-1 text-left">Product</th>
                  <th className="md:p-4 py-4 px-1 text-right">Quantity</th>
                  <th className="md:p-4 py-4 px-1 text-right">Price</th>
                  <th className="md:p-4 py-4 px-1 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-teal-50">
                    <td className="md:p-4 py-4 px-1 flex items-center">
                      <Link
                        href={`/products/${item.id}`}
                        className="flex items-center space-x-4"
                      >
                        <Image
                          src={item.images?.[0] || "/images/default-product.jpg"}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                        <span>{item.name}</span>
                      </Link>
                    </td>
                    <td className="md:p-4 py-4 px-1 text-right">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                        className="border border-primarycolororg rounded px-2 py-1"
                      >
                        {/* Updated iteration using Array.from */}
                        {Array.from({ length: item.countInStock }, (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="md:p-4 py-4 px-1 text-right text-orange-600">
                      ${item.price}
                    </td>
                    <td className="md:p-4 py-4 px-2 text-center">
                      <button
                        className="bg-primarycolororg text-white py-1 px-3 md:py-2 md:px-6 rounded hover:scale-105 hover:shadow-md transition duration-200"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white p-5 shadow-md rounded-lg">
            <ul className="space-y-4">
              <li className="text-xl font-semibold">
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : $ {itemsPrice}
              </li>
              <li>
                <button
                  onClick={() => router.push("/checkout")}
                  className="bg-primarycolororg text-white px-6 py-3 w-full rounded-lg hover:scale-105 hover:shadow-md transition duration-200"
                >
                  Proceed to checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-10">{/* <Round /> */}</div>
      </div>
    </div>
  );
}

export default CartPage;
