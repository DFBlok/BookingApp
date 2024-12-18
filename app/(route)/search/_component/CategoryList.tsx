"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GlobalApi from "@/app/_utils/GlobalApi";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { usePathname } from "next/navigation";
import { Key } from "lucide-react";

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
  const params = usePathname();
  const catergory = params.split("/")[2];
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
    <div className="h-screen mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList &&
              categoryList.map((item, index) => (
                <CommandItem key={item.id}>
                  <Link
                    href={"/search/" + item.attributes.name}
                    className={`p-2 flex gap-2 text-[14px] text-blue-600 items-center rounded-md cursor-pointer w-full ${catergory == item.attributes.name && "bg-blue-100"}`}
                  >
                    <Image
                      src={item.attributes.Icon.data.attributes.url}
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <label>{item.attributes.name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
