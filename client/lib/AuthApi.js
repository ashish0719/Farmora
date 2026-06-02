import axios from "axios";

const URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const registerUser = async (username, email, password) => {
  try {
    const res = await axios.post(`${URL}/api/auth/local/register`, {
      username,
      email,
      password,
    });

    return res.data;
  } catch (error) {
    console.log("Register Error:", error.response?.data || error);

    return null;
  }
};

export const loginUser = async (identifier, password) => {
  try {
    const res = await axios.post(`${URL}/api/auth/local`, {
      identifier,
      password,
    });

    return res.data;
  } catch (error) {
    console.log("Login Error:", error.response?.data || error);

    return null;
  }
};
