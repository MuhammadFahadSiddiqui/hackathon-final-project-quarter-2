import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import Banner from "../component/banner";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export default async function ProductsPage() {
  // Fetch all products
  const query = `*[_type == "food"]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;
  const products: Product[] = await client.fetch(query);

  return (
    <div>
      {/* Full Width Banner */}
      <Banner heading="Our Shop" breadcrumb="Shop" />

      {/* Centered & Responsive Container */}
      <div className="container mx-auto p-10">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Responsive Image */}
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg w-full h-[200px] object-cover"
              />
              
              {/* Product Details */}
              <h2 className="text-xl font-bold mt-4">{product.name}</h2>
              <p className="text-lg mt-2 text-gray-700">${product.price}</p>

              {/* View Details Link */}
              <Link
                href={`/ourshop/${product._id}`}
                className="block mt-4 text-primarycolororg font-semibold hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
