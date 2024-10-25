"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

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

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex  items-center justify-between p-8 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo image" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ? (
        <LogoutLink>
          <Button className="bg-gray-500 outline">Log Out</Button>
        </LogoutLink>
      ) : (
        <LoginLink postLoginRedirectURL="/">
          <Button className="bg-blue-600">Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
