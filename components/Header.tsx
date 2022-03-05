import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
const Header = () => {
  return (
    <div className="border-b-2">
      <div className="favourite">
        <AiOutlineStar className="text-2xl text-[#9C9C9C] cursor-pointer" />
      </div>

      <div className="settings">
        <FiSettings className="text-2xl text-[#9C9C9C] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
