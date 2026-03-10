import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-cente justify-between px-10 py-4 z-50 ">
      <ul className="flex gap-10 text-[25px] font-normal text-[#959393] Wix mt-3">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <img src={logo} alt="logo" className="h-24 object-contain" />
    </nav>
  );
};

export default Navbar;
