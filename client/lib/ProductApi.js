import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`,
    );

    console.log("Products Fetch Success:", res.data);

    return res.data.data;
  } catch (error) {
    console.log("Products Fetch Error:", error);

    return [];
  }
};

export const getSingleProduct = async (slug) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`,
    );

    return res.data.data[0];
  } catch (error) {
    console.log("Single Product Error:", error);

    return null;
  }
};
