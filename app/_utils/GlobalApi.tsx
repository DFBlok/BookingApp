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
/* doctor list */
/* const getDoctorList = () =>
  axiosClient.get("doctors?populate=*").catch((err: any) => {
    console.error("Error fetching Doctors: ", err);
  }); */
const getDoctorList = () => axiosClient.get("/doctors?populate=*");

export default {
  getCategory,
  getDoctorList,
};
/* const api = { getCategory };
export default api; */
