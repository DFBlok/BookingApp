"use client";
import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";
import "../styles/globals.css";
import DoctorLits from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useState, useEffect, SetStateAction } from "react";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);
  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp: any) => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  }; /* const getDoctorList = () => {
    GlobalApi.getDoctorList()
      .then((resp: any) => {
        console.log("Full response:", resp); // Log the entire response object
        if (resp && resp.data && resp.data.data) {
          setDoctorList(resp.data.data);
        } else {
          console.error("Unexpected response structure:", resp);
        }
      })
      .catch((error: any) => {
        console.error("Error fetching doctor list:", error);
      });
  }; */

  return (
    <div className="">
      <Hero />

      {/* Catergory & Search */}
      <CategorySearch />
      {/* populate doctor list */}
      <DoctorLits doctorList={doctorList} />
    </div>
  );
}
