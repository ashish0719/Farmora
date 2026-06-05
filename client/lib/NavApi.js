export default async function NavApi() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navbar?populate=*`
  );

  const data = await res.json();

  return data.data;
}