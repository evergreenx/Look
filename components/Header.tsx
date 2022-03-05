import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import Logo from "../public/Logo.svg";
const Header = () => {
  return (
    <div className="border-b-2 flex justify-around items-center  w-full ">
      <div className="favourite">
        <AiOutlineStar className="text-2xl text-[#9C9C9C] cursor-pointer" />
      </div>

      <div className="logo">
        <Image src={Logo} width={100} height={100} alt="logo" />
      </div>
      <div className="settings">
        <FiSettings className="text-2xl text-[#9C9C9C] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
