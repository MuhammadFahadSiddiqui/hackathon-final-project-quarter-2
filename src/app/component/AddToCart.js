"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "../../redux/slices/cardSlice";

function AddToCart({
  product,
  showQty = true, // Show quantity selection
  redirect = false, // Redirect to cart after adding
  increasePerClick = false, // Increase quantity on each click
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [qty, setQty] = useState(1); // State to manage selected quantity

  // Safely retrieve cart items from Redux state
  const { cartItem = [] } = useSelector(
    (state) => state.cart || { cartItem: [] }
  );

  // Debugging: Log product stock count
  console.log("Product stock count:", product.countInStock);

  const addToCartHandler = () => {
    let newQty = qty;

    // Handle quantity increase on each click
    if (increasePerClick) {
      const existItem = Array.isArray(cartItem)
        ? cartItem.find((x) => x.id === product.id) // Find product in the cart
        : null;

      if (existItem) {
        // Check if adding another quantity exceeds the stock limit
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1;
        } else {
          alert("No more product exists in stock."); // Alert when stock is insufficient
          return;
        }
      }
    }

    // Dispatch action to add product to the Redux store
    dispatch(addToCart({ ...product, qty: newQty }));

    // Redirect to the cart page if redirect option is enabled
    if (redirect) router.push("/cart");
  };

  return (
    <div>
      {/* Display quantity selection if stock is available and showQty is true */}
      {product.countInStock > 0 && showQty && (
        <div className="mb-2 flex justify-between">
          <div>Qty</div>
          <div>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))} // Update quantity based on selection
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Display Add to Cart button or Out of Stock button */}
      <div className="flex justify-center md:-ml-10">
        {product.countInStock > 0 ? (
          <button
            className="bg-black text-white h-12 w-[80%] rounded-xl my-8 shadow-lg"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-400 text-white h-12 w-[80%] rounded-xl my-8 shadow-lg"
          >
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}

export default AddToCart;
