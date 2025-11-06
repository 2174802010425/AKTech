import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/JordanSmartphone.png";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-500 text-white">
      <Link href={"/"} className="cursor-pointer">
        <Image
          src={Logo}
          alt="my store logo"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </Link>
      {/* search bar */}
      <SearchBar/>
      <div className="flex items-center justify-center gap-2 space-x-2">
        <Link href={"/about"}>
          <p>About Us</p>
        </Link>
        <Link href={"/contact"}>
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
