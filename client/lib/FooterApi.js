export default async function FooterApi() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer?populate=*`
  );

    const data = await res.json();
    return data.data;

}