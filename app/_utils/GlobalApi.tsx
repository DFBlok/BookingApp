/* import axios from "axios"; */
const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    " Authorization": `Bearer ${API_KEY}`,
  },
});

const getCategory = () =>
  axiosClient.get("categories?populate=*").catch((err: any) => {
    console.error("Error fetching categorie:", err);
  });
export default {
  getCategory,
};
/* const api = { getCategory };
export default api; */
