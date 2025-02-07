"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cardSlice";
import { usePathname } from "next/navigation";
import { urlFor } from '../../sanity/lib/image'

function CartSidebar() {
  const dispatch = useDispatch();

  // Extract necessary data from Redux state
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  // Ensure itemsPrice is a number; default to 0 if undefined or invalid
  const subtotal = typeof itemsPrice === "number" ? itemsPrice : 0;

  // Get current pathname
  const pathname = usePathname();

  // Add item to cart handler
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  // Remove item from cart handler
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className={
        loading
          ? ""
          : cartItems.length > 0 &&
            (pathname === "/" || pathname.startsWith("/products/"))
          ? "fixed top-0 right-0 h-full shadow-lg border-l border-l-gray-700 overflow-scroll bg-white"
          : "hidden"
      }
    >
      {loading ? (
        <div className="py-5 px-2">Loading...</div>
      ) : cartItems.length === 0 ? (
        <div className="py-5 px-2">Your cart is empty</div>
      ) : (
        <>
          <div className="p-4 flex flex-col items-center border-b border-gray-300">
            <div className="text-lg font-bold">Subtotal</div>
            <div className="font-bold text-teal-600 text-xl">${subtotal.toFixed(2)}</div>
            <div className="my-6">
              <Link
                href="/cart"
                className="w-full text-center p-2 rounded-2xl border-2 text-teal-600 border-teal-600"
              >
                Go to Cart
              </Link>
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="p-4 flex flex-col items-center border-b border-gray-300"
            >
              <Link
                href={`/ourshop/${item.id}`} // Fixed dynamic URL
                className="flex items-center"
              >
                <Image
                  src={item.images ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"} // Default image fallback
                  alt={item.name || "Product Image"}
                  width={80}
                  height={80}
                  className="p-1 rounded"
                />
              </Link>
              <div className="text-center mt-2">
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">Price: ${item.price}</div>
              </div>
              <select
                value={item.qty}
                onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                className="my-2 border border-gray-300 rounded-md"
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <button
                className="bg-teal-500 text-white px-4 py-1 my-3 rounded-md"
                onClick={() => removeFromCartHandler(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CartSidebar;
