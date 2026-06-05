"use client";

import { useEffect, useState } from "react";
import ProductList from "@/components/ProdList";
import { getProducts } from "@/lib/ProductApi";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(
      products.map((product) => product.category?.name)
    ),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category?.name === selectedCategory
        );

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Shop Products
      </h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`px-5 py-2 rounded-full transition
              ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}