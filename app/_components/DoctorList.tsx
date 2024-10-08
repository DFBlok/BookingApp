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
            <div className="border-[1px] rounded-lg p-3">
              <Image
                src={doctor.attributes?.image?.data?.attributes?.url}
                alt={doctor}
                width={500}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoctorLits;
