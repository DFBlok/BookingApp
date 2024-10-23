"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

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

function CategoryList() {
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
  return <div>CategoryList</div>;
}

export default CategoryList;
