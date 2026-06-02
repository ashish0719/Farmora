import ProdDescription from "@/components/ProdDescription";
import ProdList from "@/components/ProdList";
import { getSingleProduct, getProducts } from "@/lib/ProductApi";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await getSingleProduct(slug);

  const products = await getProducts();

  const suggested = products.filter((item) => item.slug !== slug);

  return (
    <>
      <ProdDescription product={product} />

      <section
        className="
        bg-[#F5EEDC]
        px-6
        pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="
            text-3xl
            font-bold
            mb-8
            text-[#2E1F12]"
          >
            You May Also Like
          </h2>

          <ProdList suggested={suggested} />
        </div>
      </section>
    </>
  );
}
