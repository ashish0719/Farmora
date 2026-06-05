"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { IoClose } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

function ProdDescription({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  const weightOptions = product.weights.filter(
    (item) => item.weight && item.price,
  );

  const [qty, setQty] = useState(1);

  const [weight, setWeight] = useState(weightOptions[0]?.weight);

  const [added, setAdded] = useState(false);

  const selectedWeight = weightOptions.find((item) => item.weight === weight);

  const currentPrice = selectedWeight?.price || 0;

  const total = currentPrice * qty;

  const handleCart = () => {
    addToCart(
      {
        ...product,
        price: currentPrice,
      },
      qty,
      weight,
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <section
      className="min-h-screen bg-[#F5EEDC] flex justify-center px-4
      pt-7
      pb-14"
    >
      <div
        className="
        relative
        w-full
        max-w-5xl
        rounded-[36px]
        bg-[#FFF9EF]
        border border-[#E8DCC3]
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        p-6 md:p-8"
      >
        <button
          onClick={() => router.back()}
          className="
          absolute
          top-5
          right-5
          w-10
          h-10
          rounded-full
          bg-[#F3E6CF]
          hover:bg-[#E88A17]
          hover:text-white
          transition
          flex
          justify-center
          items-center
          text-xl"
        >
          <IoClose />
        </button>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className="
            rounded-[30px]
            bg-[#F8F3EA]
            border border-[#ECE2CF]
            p-5
            flex
            justify-center
            items-center
            shadow-md"
          >
            <div
              className="
              relative
              w-[320px]
              h-[320px]
              md:w-[420px]
              md:h-[420px]
              overflow-hidden
              rounded-[24px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image[0].url}`}
                alt={product.name}
                fill
                className="
                object-cover
                rounded-[24px]"
                unoptimized
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2E1F12]">
                {product.name}
              </h1>

              <p className="text-sm text-[#7C6A52] mt-2">⭐ {product.rating}</p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-4xl font-bold text-[#E88A17]">₹{total}</h2>

              <span className="text-[#7C6A52]">
                ₹{currentPrice} × {qty}
              </span>
            </div>

            <p className="text-[#6D5B45] leading-7 text-[15px]">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {["100% Natural", "No Preservatives", "Farm Fresh"].map(
                (item) => (
                  <div
                    key={item}
                    className="
                  px-4
                  py-2
                  rounded-xl
                  bg-[#F7F1E4]
                  border border-[#E9DFC9]
                  text-sm
                  text-[#4A3A2A]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div>
              <h3 className="font-medium mb-3 text-[#2E1F12]">Weight</h3>

              <div className="flex gap-3 flex-wrap">
                {weightOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWeight(item.weight)}
                    className={`
                      px-5
                      py-2.5
                      rounded-xl
                      transition
                      ${
                        weight === item.weight
                          ? "bg-[#E88A17] text-white shadow-md"
                          : "bg-[#F7F1E4] border border-[#E9DFC9]"
                      }
                      `}
                  >
                    {item.weight}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-[#2E1F12]">Quantity</h3>

              <div
                className="
                flex
                items-center
                w-fit
                rounded-xl
                bg-[#F7F1E4]
                border border-[#E9DFC9]
                overflow-hidden"
              >
                <button
                  onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="
                  px-4
                  py-2
                  hover:bg-[#EFE5D4]
                  transition"
                >
                  -
                </button>

                <span className="px-5 font-medium">{qty}</span>

                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="
                  px-4
                  py-2
                  hover:bg-[#EFE5D4]
                  transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleCart}
                className={`
                px-7
                py-3
                rounded-xl
                text-white
                transition
                shadow-md
                ${
                  added
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-[#E88A17] hover:bg-[#d97706]"
                }
                `}
              >
                {added ? "Added ✓" : `Add ${qty} to Cart • ₹${total}`}
              </button>

              <button
                className="
                w-12
                h-12
                rounded-xl
                bg-[#F7F1E4]
                border border-[#E9DFC9]
                flex
                justify-center
                items-center
                text-lg"
              >
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProdDescription;
