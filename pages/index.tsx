import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Lang from "../Data/language.json";

import { HiSwitchHorizontal } from "react-icons/hi";
import Select from "react-select";
import TextArea from "../components/TextArea";
import { CustomSelectStyles } from "../components/CustomSelectStyles";

const Home: NextPage = () => {
  const [fromLanguage, setFromLanguage] = useState({
    name: "English",
    code: "en",
  });
  const [toLanguage, setToLanguage] = useState([
    { name: "French", code: "fr" },
  ]);

  return (
    <div className="flex flex-col  justify-center items-center px-5  ">
      <div className="select__languge flex lg:flex-row flex-col  py-8 items-center lg:space-x-6 ">
        <div className="select__languge__from">
          <Select
            // @ts-ignore
            options={Lang}
            // @ts-ignore

            styles={CustomSelectStyles}
            value={fromLanguage}
            closeMenuOnSelect={true}
            className="bg-white  text-sm border-2 font-extrabold lg:text-xl border-fuchsia-800 appearance-none focus:outline-none focus:border-blue-500 "
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            getOptionValue={(option: any) => option.name}
            // @ts-expect-error

            getOptionLabel={(option: any) => (
              <div className="capitalize font-bold text-black truncate">
                {option.name}
              </div>
            )}
            isSearchable={true}
            onChange={(option: any) => setFromLanguage(option)}
          />
        </div>

        <div className="icon ">
          <HiSwitchHorizontal className="text-3xl text-[#454545] cursor-pointer" />
        </div>
        <div className="select__languge__to">
          <Select
            // @ts-ignore
            options={Lang}
            // @ts-ignore

            styles={CustomSelectStyles}
            value={toLanguage}
            closeMenuOnSelect={true}
            className="bg-white  text-sm border-2 font-extrabold lg:text-xl border-fuchsia-800 appearance-none focus:outline-none focus:border-blue-500 "
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            getOptionValue={(option: any) => option.name}
            // @ts-expect-error

            getOptionLabel={(option: any) => (
              <div className="capitalize font-bold text-black truncate">
                {option.name}
              </div>
            )}
            isSearchable={true}
            onChange={(option: any) => setToLanguage(option)}
          />
        </div>
      </div>

      <TextArea toLanguage={toLanguage} fromLanguage={fromLanguage} />
    </div>
  );
};

export default Home;
