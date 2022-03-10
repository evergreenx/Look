import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Lang from "../Data/lang.json";

import { HiSwitchHorizontal } from "react-icons/hi";
import TextArea from "../components/TextArea";

const Home: NextPage = () => {
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("es");



  return (
    <div className="flex flex-col justify-center items-center px-5  ">
      <div className="select__languge flex  py-8 items-center space-x-6 ">
        <div className="select__languge__from">
          <select
            value={fromLanguage}
            onChange={(event) => setFromLanguage(event.target.value)}
            className="bg-white text-sm border-2 font-extrabold lg:text-xl border-fuchsia-800 appearance-none focus:outline-none focus:border-blue-500  px-2 py-2  rounded-full shadow-md"
          >
            <option>Select a country</option>

            {Lang.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="icon">
          <HiSwitchHorizontal className="text-3xl text-[#454545] cursor-pointer" />
        </div>
        <div className="select__languge__to">
          <select
            value={toLanguage}
            onChange={(event) => setToLanguage(event.target.value)}
            className="bg-white border-2 font-extrabold text-sm lg:text-xl border-fuchsia-500 appearance-none focus:outline-none focus:border-blue-500  px-2 py-2  rounded-full shadow-md"
          >
            {Lang.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TextArea />
    </div>
  );
};

export default Home;
