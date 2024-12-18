import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookAppointment from "./BookAppointment";
import { doctors } from "@/data/data";

const DoctorDetails = ({ doctor }: any) => {
  const socialMediaLst = [
    { id: 1, icons: "/logo/facebook.png" },
    { id: 2, icons: "/logo/twitter.png" },
    { id: 3, icons: "/logo/linkedin.png" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
        {/* Doctor Image */}
        <div>
          <Image
            src={doctor.attributes?.image?.data?.attributes?.url}
            alt="doctor-img"
            width={200}
            height={200}
            className="rounded-lg h-[270px] object-cover"
          />
        </div>
        {/* Doctor Info */}
        <div className="col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline">
          <h2 className="font-bold text-2xl">{doctor.attributes?.Name}</h2>
          <h2 className="flex gap-2 text-gray-500">
            <GraduationCap />
            <span>{doctor.attributes?.Year_of_Experience}</span>
          </h2>
          <h2 className="text-md flex gap-2 text-gray-500">
            <MapPin />
            <span>{doctor.attributes.Address}</span>
          </h2>
          <h2 className="text-[11px] bg-blue-100 p-1 rounded-full px-2 text-blue-600">
            {doctor.attributes?.categories?.data[0].attributes?.name}
          </h2>
          <div className="flex gap-3">
            {socialMediaLst.map((item, index) => (
              <Image
                src={item.icons}
                key={index}
                width={30}
                height={30}
                alt="icons"
              />
            ))}
          </div>

          <BookAppointment doctor={doctor} />
        </div>
      </div>
      {/* About Doctor */}
      <div className="p-3 border-[1px] rounded-lg mt-5">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <p className="text-gray-500 tracking-wide mt-2">
          {doctor.attributes.About}
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
