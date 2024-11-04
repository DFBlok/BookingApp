/* import axios from "axios"; */
const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://doctor-booking-app-backend-fe4w.onrender.com/api",
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

const getDoctorByCategory = (category: any) =>
  axiosClient.get(
    "/doctors?filters[categories][name][#in]=" + category + "&populate=*"
  );

const getDoctorById = (id: any) =>
  axiosClient.get("/doctors/" + id + "?populate=*");

//bookAppointment
const bookAppointment = (data: any) => axiosClient.post("/appointments", data);

//endpoint to send email
const sendEmail = (data: any) => axios.post("/api/sendEmail", data);

export default {
  getCategory,
  getDoctorList,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  sendEmail,
};
/* const api = { getCategory };
export default api; */
