"use client";

import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function ProdCard({ product }) {
  const router = useRouter();


  

  const handleCart = () => {
    router.push(`/products/${product.slug}`);
   console.log("Image URL:", product.image[0].url);
console.log(
  "Final URL:",
  `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image[0].url}`

);
  };

  const basePrice = product.weights?.[0]?.price || 0;

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-6 w-64 md:w-70 shadow-md">
      <Image
         src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image[0].url}`}
        width={250}
        height={200}
        alt={product.name}
        unoptimized
        className="rounded-lg object-cover w-full h-48"
      />






      <div className="flex justify-between items-center mt-3">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        <span className="text-amber-500 font-bold">₹{basePrice}</span>
      </div>

      <p className="text-gray-500 text-sm mt-2">{product.description}</p>

      <button
        onClick={handleCart}
        className="
        p-2
        rounded-lg
        mt-4
        w-full
        text-white
        flex
        justify-center
        items-center
        gap-2
        bg-amber-500
        hover:bg-amber-600
        transition"
      >
        <FaCartShopping />
        Add To Cart
      </button>
    </div>
  );
}

export default ProdCard;
