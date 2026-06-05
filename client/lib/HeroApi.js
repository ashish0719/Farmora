export async function getHeroSlides() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/hero-slides?populate=*`
  );

  const data = await res.json();

  return data.data;
}