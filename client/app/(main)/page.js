"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProdList";
import { getProducts } from "@/lib/ProductApi";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <ProductList
        products={products}
        limit={5}
      />
    </>
  );
}