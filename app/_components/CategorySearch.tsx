"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

type CategoryItem = {
  id: number;
  attributes: {
    name: string;
    Icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

const CategorySearch = () => {
  /* const [categoryList, setCategoryList] = useState([]); */
  /*  const [categoryList, setCategoryList] = useState([]); */ // Set initial state to empty array
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  /* define catergory method */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp: { data: { data: CategoryItem[] } }) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-blue-500 ">Doctor</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appiontment in one click
      </h2>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
      {/* Display List of Catergories */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {/*  {categoryList.map(
          (item, index) =>
            index < 6 && (
              <div
                key={index}
                className="flex flex-col text-center  cursor-pointer gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out"
              >
                <Image
                  src={item.attributes?.Icon?.data.attributes?.url}
                  alt="icon"
                  width={40}
                  height={40}
                />
                <label className="text-blue-600 text-sm">
                  {item?.attributes?.name}
                </label>
              </div>
            )
        )} */}
        {!categoryList ? (
          <p>Loading categories...</p> // Show a loading state while fetching
        ) : categoryList.length > 0 ? (
          categoryList.map(
            (item, index) =>
              index < 6 && (
                <div
                  key={item.id}
                  className="flex flex-col text-center  cursor-pointer gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out"
                >
                  <Image
                    src={
                      item.attributes?.Icon?.data.attributes?.url ||
                      "/default-icon.png"
                    }
                    alt="icon"
                    width={40}
                    height={40}
                  />
                  <label className="text-blue-600 text-sm">
                    {item?.attributes?.name}
                  </label>
                </div>
              )
          )
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategorySearch;
