"use client";

import React from "react";
import ProdCard from "./ProdCard";

function ProductList({ products = [], limit }) {
  const displayProducts = limit
    ? products.slice(0, limit)
    : products;

  return (
    <div className="mx-5 my-5 rounded-lg p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {displayProducts.map((product) => (
          <ProdCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;