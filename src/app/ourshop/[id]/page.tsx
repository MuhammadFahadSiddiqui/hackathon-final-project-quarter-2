"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import AddToCart from "../../component/AddToCart";
import Banner from "@/app/component/banner";

type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  imageUrl: string;
  description: string;
  available: boolean;
  countInStock: number;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const query = `*[_type == "food" && _id == $id][0]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        "imageUrl": image.asset->url,
        description,
        countInStock,
        available
      }`;

      try {
        const data = await client.fetch(query, { id: params.id });
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!product)
    return <div className="text-center mt-20">Product not found</div>;

  return (
    <div>
      <Banner heading="Shop Details" breadcrumb="Shop Details" />
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-6 p-10 my-20 md:w-2/3">
          {/* Left Section - Product Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-lg border border-gray-300"
              priority
            />
          </div>

          {/* Right Section - Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-ododod mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-primarycolororg">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-ododod mb-4">
              Category:{" "}
              <span className="text-ododod font-medium">
                {product.category}
              </span>
            </p>

            {/* Stock Availability */}
            <p
              className={`text-sm font-medium mb-6 ${product.available && product.countInStock > 0 ? "text-green-500" : "text-red-500"}`}
            >
              {product.available && product.countInStock > 0
                ? `In Stock (${product.countInStock} items)`
                : "Out of Stock"}
            </p>

            {/* Add to Cart */}
            <AddToCart
              showQty={true}
              product={{
                id: product._id,
                name: product.name,
                price: product.price,
                countInStock: product.countInStock,
              }}
              increasePerClick={true}
              redirect={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
