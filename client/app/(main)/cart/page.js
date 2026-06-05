"use client";

import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { getProducts } from "@/lib/ProductApi";
import ProdCard from "@/components/ProdCard";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, totalPrice, removeItem } = useCart();

  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    async function loadSuggested() {
      const products = await getProducts();

      const filtered = products
        .filter((p) => !cart.some((item) => item.id === p.id))
        .slice(0, 4);

      setSuggested(filtered);
    }

    loadSuggested();
  }, [cart]);

  return (
    <section className="min-h-screen bg-[#F5EEDC] px-4 pt-14 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2E1F12] mb-8">
          Your Cart
          <span className="text-lg ml-2 text-[#7C6A52]">
            ({cart.length} Items)
          </span>
        </h1>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div
            className="
            bg-[#FFF9EF]
            rounded-[32px]
            border border-[#E8DCC3]
            shadow-[0_15px_40px_rgba(0,0,0,0.06)]
            p-5 md:p-6
            h-fit"
          >
            {cart.length === 0 ? (
              <div className="py-16 text-center text-[#7C6A52]">
                Cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.weight}`}
                    className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    pb-4
                    border-b
                    border-[#EFE4CF]"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                        relative
                        w-20
                        h-20
                        rounded-2xl
                        bg-[#F7F1E4]
                        overflow-hidden"
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image[0].url}`}
                          alt={item.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <div>
                        <h2 className="text-base font-semibold text-[#2E1F12]">
                          {item.name}
                        </h2>

                        <p className="text-sm text-[#7C6A52]">{item.weight}</p>

                        <p className="mt-1 text-[#E88A17] font-semibold">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="
                        flex
                        items-center
                        rounded-xl
                        bg-[#F7F1E4]
                        border border-[#E9DFC9]
                        overflow-hidden"
                      >
                        <button
                          onClick={() => decreaseQty(item.id, item.weight)}
                          className="px-3 py-2 hover:bg-[#EFE5D4]"
                        >
                          -
                        </button>

                        <span className="px-4">{item.quantity}</span>

                        <button
                          onClick={() => increaseQty(item.id, item.weight)}
                          className="px-3 py-2 hover:bg-[#EFE5D4]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id, item.weight)}
                        className="
                        text-[#C97A2B]
                        hover:text-red-500
                        text-lg"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div
              className="
              bg-[#FFF9EF]
              rounded-[32px]
              border border-[#E8DCC3]
              shadow-[0_18px_45px_rgba(0,0,0,0.06)]
              p-6
              h-fit
              sticky
              top-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#2E1F12]">
                  Bill Summary
                </h2>

                <p className="text-sm text-[#7C6A52] mt-1">
                  {cart.length} items in cart
                </p>
              </div>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`bill-${item.id}-${item.weight}`}
                    className="
                    flex
                    justify-between
                    items-start
                    pb-4
                    border-b
                    border-[#EFE4CF]"
                  >
                    <div>
                      <h3 className="font-medium text-[#2E1F12]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-[#7C6A52] mt-1">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <span className="font-semibold text-[#E88A17]">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
                mt-6
                pt-5
                border-t
                border-[#E9DFC9]
                flex
                justify-between
                items-center"
              >
                <span className="text-lg font-semibold text-[#2E1F12]">
                  Grand Total
                </span>

                <span className="text-3xl font-bold text-[#E88A17]">
                  ₹{totalPrice}
                </span>
              </div>

              <button
                className="
                mt-7
                w-full
                rounded-2xl
                bg-[#E88A17]
                hover:bg-[#d97706]
                text-white
                py-3
                transition
                font-medium
                shadow-md"
              >
                Proceed to Checkout
              </button>

              <div
                className="
                mt-5
                rounded-2xl
                bg-[#F7F1E4]
                border border-[#E9DFC9]
                p-4"
              >
                <p className="text-sm text-[#6D5B45] text-center">
                  Fresh delivery • Secure checkout
                </p>
              </div>
            </div>
          )}
        </div>

        {suggested.length > 0 && (
          <div className="mt-14">
            <h2 className="text-3xl font-bold text-[#2E1F12] mb-7">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {suggested.map((product) => (
                <ProdCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
