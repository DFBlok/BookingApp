"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState();
  useEffect(() => {
    getCategoryList();
  }, []);

  /* define catergory method */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp: { data: { data: any } }) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="mb-10 items-center flex flex-col gap-2">
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
    </div>
  );
};

export default CategorySearch;
