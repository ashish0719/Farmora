export default async function HomePageApi() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?populate=*`)

    const data = await res.json();

    return data.data;
}