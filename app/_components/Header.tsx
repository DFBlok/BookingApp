import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image src="/logo.svg" alt="logo image" width={180} height={80} />
    </div>
  );
};

export default Header;
