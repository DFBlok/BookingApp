import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 1,
      name: "Contact us",
      path: "/",
    },
  ];
  return (
    <div className="flex  items-center justify-between p-8 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo image" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button className="bg-blue-600">Get Started</Button>
    </div>
  );
};

export default Header;
