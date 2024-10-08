import React from "react";
import Image from "next/image";

interface DoctorListProps {
  doctorList: any[];
}

const DoctorLits = ({ doctorList }: DoctorListProps) => {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl mb-5">Popular Doctors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {doctorList &&
          doctorList.map((doctor, index) => (
            <div className="border-[1px] rounded-lg p-3" key={index}>
              <Image
                src={doctor.attributes?.image?.data?.attributes?.url}
                alt={doctor}
                width={500}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
              <div className="mt-3 items-baseline flex flex-col gap-3">
                <h2 className="text-[10px] bg-blue-100 py-1 rounded-full px-2 text-blue-700">
                  {doctor.attributes?.categories?.data[0].attributes?.name}
                </h2>
                <h2 className="font-bold">{doctor.attributes?.Name}</h2>
                <h2 className="text-blue-700 text-sm">
                  {doctor.attributes?.Year_of_Experience}
                </h2>
                <h2 className="text-gray-500 text-sm">
                  {doctor.attributes?.Address}
                </h2>
                <h2 className="p-2 px-3 text-blue-600 border-[1px] border-blue-600 rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                  Book Now
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoctorLits;
