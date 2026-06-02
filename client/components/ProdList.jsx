"use client";

import React, { useEffect, useState } from "react";
import ProdCard from "./ProdCard";
import { getProducts } from "@/lib/ProductApi";

function ProductList({ limit, suggested }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      if (!suggested) {
        const data = await getProducts();
        setProducts(data);
        return;
      }

      setProducts(suggested);
    }

    fetchProducts();
  }, []);

  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="mx-5 my-5  rounded-lg p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {displayProducts.map((product) => (
          <ProdCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
