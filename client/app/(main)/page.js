import Image from "next/image";
import ProductList from "@/components/ProdList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList limit={5} />
    </>
  );
}
