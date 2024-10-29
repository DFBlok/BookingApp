"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../_components/DoctorDetails";

const Details = ({ params }: any) => {
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then((resp: any) => {
      console.log(resp);
      setDoctor(resp.data.data);
    });
  };
  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          {/* Doctor Details */}
          {doctor && <DoctorDetails doctor={doctor} />}
        </div>
        {/* Doctor Sugestion */}
        <div></div>
      </div>
    </div>
  );
};

export default Details;
